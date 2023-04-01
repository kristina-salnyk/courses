import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { CourseCard } from './components/CourseCard';
import { Container } from '../../common/Container';
import { Button } from '../../common/Button';
import { SearchBar } from './components/SearchBar';
import noResults from '../../assets/img/no-results.png';
import { selectCoursesBySearchQuery } from '../../store/courses/selectors';
import {
	ADD_NEW_COURSE_BTN,
	COURSES_NO_RESULTS_TEXT,
	NO_RESULTS_ALTERNATIVE_TEXT,
	ROLES,
	ROUTES,
} from '../../constants';

import {
	CoursesHeader,
	CoursesList,
	CoursesMessage,
	CoursesStyled,
} from './Courses.styled';
import { selectUser } from '../../store/user/selectors';

const Courses = () => {
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState('');

	const { role } = useSelector(selectUser);
	const isAdmin = role === ROLES.ADMIN;

	const courses = useSelector((state) =>
		selectCoursesBySearchQuery(state, searchQuery)
	);

	return (
		<CoursesStyled>
			<Container>
				<CoursesHeader>
					<SearchBar onSubmit={setSearchQuery} />
					{isAdmin && (
						<Button
							type={ADD_NEW_COURSE_BTN.type}
							text={ADD_NEW_COURSE_BTN.text}
							onClick={() => navigate(ROUTES.CREATE_COURSE)}
						/>
					)}
				</CoursesHeader>
				{courses.length > 0 ? (
					<CoursesList>
						{courses.map((item) => (
							<li key={item.id}>
								<CourseCard {...item} />
							</li>
						))}
					</CoursesList>
				) : (
					<CoursesMessage>
						<p>{COURSES_NO_RESULTS_TEXT}</p>
						<img
							src={noResults}
							alt={NO_RESULTS_ALTERNATIVE_TEXT}
							width={300}
						/>
					</CoursesMessage>
				)}
			</Container>
		</CoursesStyled>
	);
};

export default Courses;
