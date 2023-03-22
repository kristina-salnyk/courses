import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Courses } from './components/Courses';
import { CreateCourse } from './components/CreateCourse';
import { Registration } from './components/Registration';
import { Login } from './components/Login';
import { Header } from './components/Header';
import { RestrictedRoute } from './components/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';
import { ROUTES } from './constants';

import 'react-toastify/dist/ReactToastify.css';

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
			<main>
				<ToastContainer />
				<Header />
				<Routes>
					<Route
						element={
							<RestrictedRoute
								redirectTo={ROUTES.COURSES}
								component={<Login />}
							/>
						}
					/>
					<Route
						path={ROUTES.COURSES}
						element={
							<PrivateRoute redirectTo={ROUTES.LOGIN} component={<Courses />} />
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
					<Route path='*' element={<Navigate to={ROUTES.COURSES} replace />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
