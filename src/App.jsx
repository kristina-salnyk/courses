import React, { lazy, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import WebFont from 'webfontloader';

import { SharedLayout } from './components/SharedLayout';
import { Private } from './components/Private';
import { RestrictedRoute } from './components/RestrictedRoute';
import { Loader } from './common/Loader';
import { clearAuthHeader, setAuthHeader } from './services/api';
import { current } from './services/api/user';
import { store } from './store';
import { selectUser } from './store/user/selectors';
import { loginUser, updateUser } from './store/user/actionCreators';
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

	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Noto Sans', 'sans-serif'],
			},
		});
	}, []);

	useEffect(() => {
		(async () => {
			try {
				const state = store.getState();
				const { token } = state.user;

				if (!token) return;

				setIsLoading(true);

				try {
					const response = await current(token);
					const { data } = response;

					if (response.status === 200 && data.successful) {
						const { name, email, role } = data.result;

						dispatch(loginUser({ name, email, role, token }));
					} else {
						dispatch(updateUser({ token: '' }));
					}
				} catch (error) {
					dispatch(updateUser({ token: '' }));
				} finally {
					setIsLoading(false);
				}
			} catch (error) {
			} finally {
				dispatch(updateUser({ isRefreshing: false }));
			}
		})();
	}, [dispatch]);

	useEffect(() => {
		if (token) {
			setAuthHeader(token);
		} else {
			clearAuthHeader();
		}
	}, [token]);

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
							<Private redirectTo={ROUTES.LOGIN} component={<Courses />} />
						}
					/>
					<Route
						path={ROUTES.COURSE_INFO}
						element={
							<Private redirectTo={ROUTES.LOGIN} component={<CourseInfo />} />
						}
					/>
					<Route
						path={ROUTES.CREATE_COURSE}
						element={
							<Private redirectTo={ROUTES.LOGIN} component={<CourseForm />} />
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
