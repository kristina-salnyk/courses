import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Header } from '../Header';

import { LoaderStyled } from './SharedLayout.styled';

const SharedLayout = () => (
	<>
		<ToastContainer />
		<Header />
		<main>
			<Suspense fallback={<LoaderStyled />}>
				<Outlet />
			</Suspense>
		</main>
	</>
);

export default SharedLayout;
