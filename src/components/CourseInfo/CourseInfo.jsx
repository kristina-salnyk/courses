import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoCreate } from 'react-icons/io5';
import { HiUsers } from 'react-icons/hi';
import { FaHashtag } from 'react-icons/fa';
import { MdAccessTimeFilled, MdArrowBackIos } from 'react-icons/md';

import { Container } from '../../common/Container';
import { Icon } from '../../common/Icon';
import { selectCourseById } from '../../store/courses/selectors';
import { selectAuthorsByIds } from '../../store/authors/selectors';
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
} from './CourseInfo.styled';

const CourseInfo = () => {
	const { courseId } = useParams();

	const course = useSelector((state) => selectCourseById(state, courseId));

	const courseAuthors = course?.authors ?? [];
	const authors = useSelector((state) =>
		selectAuthorsByIds(state, courseAuthors)
	);

	return (
		<CourseInfoStyled>
			<Container>
				<CourseInfoWrap>
					<LinkStyled
						path={ROUTES.COURSES}
						text={BACK_BTN.text}
						icon={<Icon component={MdArrowBackIos} />}
					/>
					{course ? (
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
					) : (
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
