import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUser } from '../../store/user/selectors';
import { ROUTES } from '../../constants';

const RestrictedRoute = ({
	component: Component,
	redirectTo = ROUTES.ROOT,
}) => {
	const { isAuth } = useSelector(selectUser);

	return isAuth ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;

RestrictedRoute.propTypes = {
	component: PropTypes.element.isRequired,
	redirectTo: PropTypes.string.isRequired,
};
