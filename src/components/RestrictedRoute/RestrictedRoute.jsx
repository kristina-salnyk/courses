import React from 'react';
import { Navigate } from 'react-router-dom';

import { useUser } from '../../contexts/UserContext';
import PropTypes from 'prop-types';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
	const { isLoggedIn } = useUser();
	console.log(isLoggedIn);

	return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;

RestrictedRoute.propTypes = {
	component: PropTypes.element.isRequired,
	redirectTo: PropTypes.string.isRequired,
};
