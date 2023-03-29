import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { CourseCard } from './components/CourseCard';
import { Container } from '../../common/Container';
import { Button } from '../../common/Button';
import { SearchBar } from './components/SearchBar';
import { getCourses } from '../../services/api/courses';
import { store } from '../../store';
import { selectCoursesBySearchQuery } from '../../store/courses/selectors';
import { setCourses } from '../../store/courses/actionCreators';
import {
	ADD_NEW_COURSE_BTN,
	GET_COURSES_STATUS,
	ROUTES,
} from '../../constants';

import {
	CoursesHeader,
	CoursesList,
	CoursesStyled,
	LoaderStyled,
} from './Courses.styled';

const Courses = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [searchQuery, setSearchQuery] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const courses = useSelector((state) =>
		selectCoursesBySearchQuery(state, searchQuery)
	);

	useEffect(() => {
		// not erase the manipulations with the array of courses made locally
		if (store.getState().courses.length > 0) return;

		(async () => {
			setIsLoading(true);

			try {
				const response = await getCourses();
				const { data } = response;

				if (response.status === 200 && data.successful) {
					const courses = data.result;

					dispatch(setCourses(courses));
				} else {
					toast.error(
						GET_COURSES_STATUS[response.status] ?? GET_COURSES_STATUS.default
					);
					dispatch(setCourses([]));
				}
			} catch (error) {
				toast.error(
					GET_COURSES_STATUS[error.response.status] ??
						GET_COURSES_STATUS.default
				);
				dispatch(setCourses([]));
			} finally {
				setIsLoading(false);
			}
		})();
	}, [dispatch]);

	return (
		<CoursesStyled>
			<Container>
				{isLoading && <LoaderStyled />}
				<CoursesHeader>
					<SearchBar onSubmit={setSearchQuery} />
					<Button
						type={ADD_NEW_COURSE_BTN.type}
						text={ADD_NEW_COURSE_BTN.text}
						onClick={() => navigate(ROUTES.CREATE_COURSE)}
					/>
				</CoursesHeader>
				{courses.length > 0 && (
					<CoursesList>
						{courses.map((item) => (
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
