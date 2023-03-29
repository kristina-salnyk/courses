import * as actionTypes from './actionTypes';

export const loginUser = ({ name, email, token }) => {
	return {
		type: actionTypes.USER_LOGIN,
		payload: { name, email, token },
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
