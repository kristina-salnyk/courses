import React from 'react';
import { Navigate } from 'react-router-dom';

import { useUser } from '../../contexts/UserContext';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
	const { isLoggedIn } = useUser();

	const shouldRedirect = !isLoggedIn;

	return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
	component: PropTypes.element.isRequired,
	redirectTo: PropTypes.string.isRequired,
};
