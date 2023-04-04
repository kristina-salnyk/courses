import React, { lazy, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WebFont from 'webfontloader';

import { SharedLayout } from './components/SharedLayout';
import { PrivateRoute } from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute';
import { Loader } from './common/Loader';
import { selectUser } from './store/user/selectors';
import useAuthors from './hooks/useAuthors';
import useCourses from './hooks/useCourses';
import useUser from './hooks/useUser';
import { ROUTES } from './constants';

import 'react-toastify/dist/ReactToastify.css';

const Courses = lazy(() => import('./components/Courses'));
const CourseForm = lazy(() => import('./components/CourseForm'));
const CourseInfo = lazy(() => import('./components/CourseInfo'));
const Registration = lazy(() => import('./components/Registration'));
const Login = lazy(() => import('./components/Login'));

function App() {
	const { isAuth } = useSelector(selectUser);

	const { fetchUser, isLoading: isUserLoading, isRefreshing } = useUser();
	const { fetchAuthors, isLoading: isAuthorsLoading } = useAuthors();
	const { fetchCourses, isLoading: isCoursesLoading } = useCourses();

	const isLoading = isUserLoading || isAuthorsLoading || isCoursesLoading;

	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Noto Sans', 'sans-serif'],
			},
		});
	}, []);

	useEffect(() => {
		if (isRefreshing.current) return;

		(async () => {
			await fetchUser();
			// dispatch(fetchUser());
		})();
	}, [fetchUser, isRefreshing]);

	useEffect(() => {
		if (!isAuth) return;

		(async () => {
			await fetchAuthors();
			await fetchCourses();
		})();
	}, [fetchAuthors, fetchCourses, isAuth]);

	if (isLoading) return <Loader />;

	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.ROOT} element={<SharedLayout />}>
					<Route index element={<Navigate to={ROUTES.COURSES} replace />} />
					<Route
						path={ROUTES.COURSES}
						element={
							<PrivateRoute redirectTo={ROUTES.LOGIN} component={<Courses />} />
						}
					/>
					<Route
						path={ROUTES.COURSE_INFO}
						element={
							<PrivateRoute
								redirectTo={ROUTES.LOGIN}
								component={<CourseInfo />}
							/>
						}
					/>
					<Route
						path={ROUTES.CREATE_COURSE}
						element={
							<PrivateRoute
								restricted={true}
								redirectTo={ROUTES.LOGIN}
								component={<CourseForm />}
							/>
						}
					/>
					<Route
						path={ROUTES.REGISTRATION}
						element={
							<RestrictedRoute
								redirectTo={ROUTES.COURSES}
								component={<Registration />}
							/>
						}
					/>
					<Route
						path={ROUTES.LOGIN}
						element={
							<RestrictedRoute
								redirectTo={ROUTES.COURSES}
								component={<Login />}
							/>
						}
					/>
				</Route>
				<Route path='*' element={<Navigate to={ROUTES.ROOT} replace />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
