import { useCallback, useMemo, useState } from 'react';

import { CourseCard } from './components/CourseCard';
import { Container } from '../../common/Container';
import { Button } from '../../common/Button';
import { SearchBar } from './components/SearchBar';
import { useCurrentView } from '../../contexts/ViewContext';
import { useCourses } from '../../contexts/CoursesContext';
import { ADD_NEW_COURSE_BTN, VIEWS } from '../../constants';

import { CoursesList, CoursesStyled, ToolBar } from './Courses.styled';

const Courses = () => {
	const { updateCurrentView } = useCurrentView();
	const { courses } = useCourses();

	const [searchQuery, setSearchQuery] = useState('');

	const searchedCourses = useMemo(() => {
		return courses.filter((item) =>
			[item.title.toLowerCase(), item.id.toLowerCase()].some((property) =>
				property.includes(searchQuery.toLowerCase())
			)
		);
	}, [courses, searchQuery]);

	const updateSearchQuery = useCallback(setSearchQuery, [setSearchQuery]);

	return (
		<CoursesStyled>
			<Container>
				<ToolBar>
					<SearchBar onSubmit={updateSearchQuery} />
					<Button
						type={ADD_NEW_COURSE_BTN.type}
						text={ADD_NEW_COURSE_BTN.text}
						onClick={() => updateCurrentView(VIEWS.CREATE_NEW_COURSE)}
					/>
				</ToolBar>
				{searchedCourses.length > 0 && (
					<CoursesList>
						{searchedCourses.map((item) => (
							<CourseCard key={item.id} {...item} />
						))}
					</CoursesList>
				)}
			</Container>
		</CoursesStyled>
	);
};

export default Courses;
