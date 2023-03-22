import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Courses } from './components/Courses';
import { Header } from './components/Header';
import { CreateCourse } from './components/CreateCourse';
import { Registration } from './components/Registration';
import { Login } from './components/Login';
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
			<ToastContainer />
			<Header />
			<main>
				<Routes>
					<Route path={ROUTES.COURSES} element={<Courses />} />
					<Route path={ROUTES.CREATE_COURSE} element={<CreateCourse />} />
					<Route path={ROUTES.REGISTRATION} element={<Registration />} />
					<Route path={ROUTES.LOGIN} element={<Login />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
