import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { useUser } from '../../contexts/UserContext';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
	const { isLoggedIn } = useUser();

	return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;

RestrictedRoute.propTypes = {
	component: PropTypes.element.isRequired,
	redirectTo: PropTypes.string.isRequired,
};
