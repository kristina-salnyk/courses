import React, { lazy, useEffect } from 'react';
import WebFont from 'webfontloader';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { SharedLayout } from './components/SharedLayout';
import { RestrictedRoute } from './components/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';
import { ROUTES } from './constants';

import 'react-toastify/dist/ReactToastify.css';

const Courses = lazy(() => import('./components/Courses'));
const CreateCourse = lazy(() => import('./components/CreateCourse'));
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
								redirectTo={ROUTES.LOGIN}
								component={<CreateCourse />}
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
