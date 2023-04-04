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
