import React from 'react';
import { useParams } from 'react-router-dom';
import { IoCreate } from 'react-icons/io5';
import { HiUsers } from 'react-icons/hi';
import { FaHashtag } from 'react-icons/fa';
import { MdAccessTimeFilled, MdArrowBackIos } from 'react-icons/md';

import { Container } from '../../common/Container';
import { Icon } from '../../common/Icon';
import { useCourses } from '../../contexts/CoursesContext';
import { useAuthors } from '../../contexts/AuthorsContext';
import pipeDuration from '../../helpers/pipeDuration';
import { BACK_BTN, DURATION_UNITS, ROUTES } from '../../constants';

import {
	CourseDetails,
	CourseDetailsWrap,
	CourseInfoContent,
	CourseInfoStyled,
	CourseInfoWrap,
	CourseTitle,
	LinkStyled,
} from './CourseInfo.styled';

const CourseInfo = () => {
	const { courseId } = useParams();

	const { getCourseById } = useCourses();
	const { getAuthorsById } = useAuthors();

	const course = getCourseById(courseId);
	const courseAuthors = getAuthorsById(course.authors);

	return (
		<CourseInfoStyled>
			<Container>
				<CourseInfoWrap>
					<LinkStyled
						path={ROUTES.COURSES}
						text={BACK_BTN.text}
						icon={<Icon component={MdArrowBackIos} />}
					/>
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
									{courseAuthors.map((item) => (
										<li key={item.id}>
											<span>{item.name}</span>
										</li>
									))}
								</ul>
							</CourseDetails>
						</CourseDetailsWrap>
					</CourseInfoContent>
				</CourseInfoWrap>
			</Container>
		</CourseInfoStyled>
	);
};

export default CourseInfo;
