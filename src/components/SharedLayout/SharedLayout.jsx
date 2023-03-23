import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Header } from '../Header';
import { Loader } from '../../common/Loader';

const SharedLayout = () => {
	return (
		<>
			<ToastContainer />
			<Header />
			<main>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</main>
		</>
	);
};

export default SharedLayout;
