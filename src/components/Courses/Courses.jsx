import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CourseCard } from './components/CourseCard';
import { Container } from '../../common/Container';
import { Button } from '../../common/Button';
import { SearchBar } from './components/SearchBar';
import { useCourses } from '../../contexts/CoursesContext';
import { ADD_NEW_COURSE_BTN, ROUTES } from '../../constants';

import { CoursesList, CoursesStyled, ToolBar } from './Courses.styled';

const Courses = () => {
	const navigate = useNavigate();
	const { courses } = useCourses();

	const [searchQuery, setSearchQuery] = useState('');

	const searchedCourses = useMemo(() => {
		return courses.filter((item) =>
			[item.title.toLowerCase(), item.id.toLowerCase()].some((property) =>
				property.includes(searchQuery.toLowerCase())
			)
		);
	}, [courses, searchQuery]);

	return (
		<CoursesStyled>
			<Container>
				<ToolBar>
					<SearchBar onSubmit={setSearchQuery} />
					<Button
						type={ADD_NEW_COURSE_BTN.type}
						text={ADD_NEW_COURSE_BTN.text}
						onClick={() => navigate(ROUTES.CREATE_COURSE)}
					/>
				</ToolBar>
				{searchedCourses.length > 0 && (
					<CoursesList>
						{searchedCourses.map((item) => (
							<li key={item.id}>
								<CourseCard {...item} />
							</li>
						))}
					</CoursesList>
				)}
			</Container>
		</CoursesStyled>
	);
};

export default Courses;
