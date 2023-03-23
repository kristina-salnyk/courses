import React from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '../../common/Container';
import { useCourses } from '../../contexts/CoursesContext';
import { useAuthors } from '../../contexts/AuthorsContext';
import pipeDuration from '../../helpers/pipeDuration';
import { CARD_TITLES, DURATION_UNITS } from '../../constants';

import { CourseInfoStyled } from './CourseInfo.styled';
import { CourseDetails } from '../CreateCourse/CreateCourse.styled';
import { CourseDetailsTitle } from '../Courses/components/CourseCard/CourseCard.styled';

const CourseInfo = () => {
	const { courseId } = useParams();

	const { getCourseById } = useCourses();
	const { getAuthorsById } = useAuthors();

	const course = getCourseById(courseId);
	const courseAuthors = getAuthorsById(course.authors);

	return (
		<CourseInfoStyled>
			<Container>
				<div>
					<h1>{course.title}</h1>
					<div>
						<p>{course.description}</p>
						<CourseDetails>
							<CourseDetailsTitle>{CARD_TITLES.ID}</CourseDetailsTitle>
							<span>{course.id}</span>
							<CourseDetailsTitle>{CARD_TITLES.DURATION}</CourseDetailsTitle>
							<span>
								{pipeDuration(course.duration)} {DURATION_UNITS}
							</span>
							<CourseDetailsTitle>{CARD_TITLES.CREATED}</CourseDetailsTitle>
							<span>{course.creationDate.replaceAll('/', '.')}</span>
							<CourseDetailsTitle>
								{CARD_TITLES.COURSE_AUTHORS}
							</CourseDetailsTitle>
							<ul>
								{courseAuthors.map((item) => (
									<li key={item.id}>
										<span>{item.name}</span>
									</li>
								))}
							</ul>
						</CourseDetails>
					</div>
				</div>
			</Container>
		</CourseInfoStyled>
	);
};

export default CourseInfo;
