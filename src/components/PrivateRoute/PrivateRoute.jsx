import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUser } from '../../store/user/selectors';
import { ROLES, ROUTES } from '../../constants';

const PrivateRoute = ({
	component: Component,
	redirectTo = ROUTES.ROOT,
	restricted = false,
}) => {
	const { isAuth, role } = useSelector(selectUser);

	const shouldRedirect = !isAuth;
	const shouldRestrict = restricted && !(role === ROLES.ADMIN);

	return shouldRedirect ? (
		<Navigate to={redirectTo} />
	) : shouldRestrict ? (
		<Navigate to={ROUTES.COURSES} />
	) : (
		Component
	);
};

export default PrivateRoute;

PrivateRoute.propTypes = {
	component: PropTypes.element.isRequired,
	redirectTo: PropTypes.string.isRequired,
	restricted: PropTypes.bool,
};
