import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoCreate } from 'react-icons/io5';
import { HiUsers } from 'react-icons/hi';
import { FaHashtag } from 'react-icons/fa';
import { MdAccessTimeFilled, MdArrowBackIos } from 'react-icons/md';

import { Container } from '../../common/Container';
import { Icon } from '../../common/Icon';
import { selectAuthorsByIds } from '../../store/authors/selectors';
import { fetchAuthors } from '../../store/authors/thunk';
import { fetchCourse } from '../../store/courses/thunk';
import pipeDuration from '../../helpers/pipeDuration';
import noResults from '../../assets/img/no-results.png';
import {
	BACK_BTN,
	COURSE_INFO_NO_RESULTS_TEXT,
	DURATION_UNITS,
	NO_RESULTS_ALTERNATIVE_TEXT,
	ROUTES,
} from '../../constants';

import {
	CourseDetails,
	CourseDetailsWrap,
	CourseInfoContent,
	CourseInfoMessage,
	CourseInfoStyled,
	CourseInfoWrap,
	CourseTitle,
	LinkStyled,
	LoaderStyled,
} from './CourseInfo.styled';

const CourseInfo = () => {
	const dispatch = useDispatch();
	const { courseId } = useParams();

	const initDataFetched = useRef(false);
	const courseDataFetched = useRef(false);
	const [course, setCourse] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const courseAuthors = course?.authors ?? [];

	const authors = useSelector((state) =>
		selectAuthorsByIds(state, courseAuthors)
	);

	const shouldRenderCourse = !isLoading && course;

	const shouldRenderMsg = !isLoading && !course;

	useEffect(() => {
		if (initDataFetched.current) return;
		initDataFetched.current = true;

		dispatch(fetchAuthors(setIsLoading));
	}, [dispatch]);

	useEffect(() => {
		if (courseDataFetched.current) return;
		courseDataFetched.current = true;

		(async () => {
			const result = await dispatch(fetchCourse(courseId, setIsLoading));
			if (result.successful) setCourse(result.data);
		})();
	}, [courseId, dispatch]);

	return (
		<CourseInfoStyled>
			<Container>
				<CourseInfoWrap>
					<LinkStyled
						path={ROUTES.COURSES}
						text={BACK_BTN.text}
						icon={<Icon component={MdArrowBackIos} />}
					/>
					{isLoading && <LoaderStyled />}
					{shouldRenderCourse && (
						<>
							<CourseTitle>{course.title}</CourseTitle>
							<CourseInfoContent>
								<p>{course.description}</p>
								<CourseDetailsWrap>
									<CourseDetails>
										<Icon component={FaHashtag} />
										<span>{course.id}</span>
										<Icon component={MdAccessTimeFilled} />
										<span>
											{pipeDuration(course.duration)} {DURATION_UNITS}
										</span>
										<Icon component={IoCreate} />
										<span>{course.creationDate.replaceAll('/', '.')}</span>
										<Icon component={HiUsers} />
										<ul>
											{authors.map((item) => (
												<li key={item.id}>
													<span>{item.name}</span>
												</li>
											))}
										</ul>
									</CourseDetails>
								</CourseDetailsWrap>
							</CourseInfoContent>
						</>
					)}
					{shouldRenderMsg && (
						<CourseInfoMessage>
							<p>{COURSE_INFO_NO_RESULTS_TEXT}</p>
							<img
								src={noResults}
								alt={NO_RESULTS_ALTERNATIVE_TEXT}
								width={300}
							/>
						</CourseInfoMessage>
					)}
				</CourseInfoWrap>
			</Container>
		</CourseInfoStyled>
	);
};

export default CourseInfo;
