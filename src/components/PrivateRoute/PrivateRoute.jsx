import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { useUser } from '../../contexts/UserContext';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
	const { isLoggedIn, isRefreshing } = useUser();

	const shouldRedirect = !isLoggedIn && !isRefreshing;

	return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
	component: PropTypes.element.isRequired,
	redirectTo: PropTypes.string.isRequired,
};
