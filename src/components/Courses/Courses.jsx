import { useMemo, useState } from 'react';

import { CourseCard } from './components/CourseCard';
import { Container } from '../../common/Container';
import { Button } from '../../common/Button';
import { SearchBar } from './components/SearchBar';
import { useCurrentView } from '../../contexts/ViewContext';
import {
	ADD_NEW_COURSE_BTN,
	MOCKED_COURSES_LIST,
	VIEWS,
} from '../../constants';

import { CoursesList, CoursesStyled, ToolBar } from './Courses.styled';

const Courses = () => {
	const [courses] = useState(MOCKED_COURSES_LIST);
	const [searchQuery, setSearchQuery] = useState('');

	const { setCurrentView } = useCurrentView();

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
						onClick={() => setCurrentView(VIEWS.CREATE_NEW_COURSE)}
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
