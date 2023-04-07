import React, { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import WebFont from 'webfontloader';

import { SharedLayout } from './components/SharedLayout';
import { PrivateRoute } from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute';
import { ROUTES } from './constants';

import 'react-toastify/dist/ReactToastify.css';

const Courses = lazy(() => import('./components/Courses'));
const CourseForm = lazy(() => import('./components/CourseForm'));
const CourseInfo = lazy(() => import('./components/CourseInfo'));
const Registration = lazy(() => import('./components/Registration'));
const Login = lazy(() => import('./components/Login'));

function App() {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Noto Sans', 'sans-serif'],
			},
		});
	}, []);

	return (
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
	);
}

export default App;
