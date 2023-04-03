import * as actionTypes from './actionTypes';

export const loginUser = ({ name, email, role, token }) => {
	return {
		type: actionTypes.USER_LOGIN,
		payload: { name, email, role, token },
	};
};

export const logoutUser = () => {
	return {
		type: actionTypes.USER_LOGOUT,
	};
};

export const changeIsLoading = (isLoading) => {
	return {
		type: actionTypes.USER_LOADING,
		payload: { isLoading },
	};
};

export const changeIsRefreshing = (isRefreshing) => {
	return {
		type: actionTypes.USER_REFRESHING,
		payload: { isRefreshing },
	};
};
