import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { useUser } from '../../contexts/UserContext';
import { ROUTES } from '../../constants';

const RestrictedRoute = ({
	component: Component,
	redirectTo = ROUTES.ROOT,
}) => {
	const { isLoggedIn } = useUser();

	return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;

RestrictedRoute.propTypes = {
	component: PropTypes.element.isRequired,
	redirectTo: PropTypes.string.isRequired,
};
