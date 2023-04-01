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

export const updateUser = (user) => {
	return {
		type: actionTypes.USER_UPDATE,
		payload: { ...user },
	};
};
