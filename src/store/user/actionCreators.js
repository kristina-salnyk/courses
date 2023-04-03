import * as actionTypes from './actionTypes';

export const loginUser = (user) => {
	return {
		type: actionTypes.USER_LOGIN,
		payload: { ...user },
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
