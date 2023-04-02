import React, { lazy, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import WebFont from 'webfontloader';

import { SharedLayout } from './components/SharedLayout';
import { PrivateRoute } from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute';
import { Loader } from './common/Loader';
import useCourses from './hooks/useCourses';
import useAuthors from './hooks/useAuthors';
import { clearAuthHeader, setAuthHeader } from './services/api';
import { fetchUser } from './store/user/thunk';
import { selectUser } from './store/user/selectors';
import { ROUTES } from './constants';

import 'react-toastify/dist/ReactToastify.css';

const Courses = lazy(() => import('./components/Courses'));
const CourseForm = lazy(() => import('./components/CourseForm'));
const CourseInfo = lazy(() => import('./components/CourseInfo'));
const Registration = lazy(() => import('./components/Registration'));
const Login = lazy(() => import('./components/Login'));

function App() {
	const dispatch = useDispatch();
	const { isRefreshing, token } = useSelector(selectUser);
	const [isLoading, setIsLoading] = useState(false);

	const { isCoursesLoading } = useCourses();
	const { isAuthorsLoading } = useAuthors();

	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Noto Sans', 'sans-serif'],
			},
		});
	}, []);

	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);

	useEffect(() => {
		if (token) {
			setAuthHeader(token);
		} else {
			clearAuthHeader();
		}
	}, [token]);

	useEffect(() => {
		setIsLoading(isCoursesLoading || isAuthorsLoading);
	}, [isCoursesLoading, isAuthorsLoading]);

	if (isLoading) return <Loader />;

	if (isRefreshing) return null;

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
