import * as actionTypes from './actionTypes';

export const loginAction = ({ name, email, role, token }) => {
	return {
		type: actionTypes.USER_LOGIN,
		payload: { name, email, role, token },
	};
};

export const logoutAction = () => {
	return {
		type: actionTypes.USER_LOGOUT,
	};
};
