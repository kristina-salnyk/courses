import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUser } from '../../store/user/selectors';
import { ROUTES } from '../../constants';

const PrivateRoute = ({ component: Component, redirectTo = ROUTES.ROOT }) => {
	const { isAuth, isRefreshing } = useSelector(selectUser);

	const shouldRedirect = !isAuth && !isRefreshing;

	return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
	component: PropTypes.element.isRequired,
	redirectTo: PropTypes.string.isRequired,
};
