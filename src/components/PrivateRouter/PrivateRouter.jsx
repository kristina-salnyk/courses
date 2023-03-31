import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUser } from '../../store/user/selectors';
import useCourses from '../../hooks/useCourses';
import useAuthors from '../../hooks/useAuthors';
import { ROUTES } from '../../constants';

import { LoaderStyled } from './PrivateRouter.styled';

const PrivateRouter = ({ component: Component, redirectTo = ROUTES.ROOT }) => {
	const { isAuth, isRefreshing } = useSelector(selectUser);

	const { isCoursesLoading } = useCourses();
	const { isAuthorsLoading } = useAuthors();
	const isLoading = isCoursesLoading || isAuthorsLoading;

	const shouldRedirect = !isAuth && !isRefreshing;

	if (isLoading) return <LoaderStyled />;

	return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRouter;

PrivateRouter.propTypes = {
	component: PropTypes.element.isRequired,
	redirectTo: PropTypes.string.isRequired,
};
