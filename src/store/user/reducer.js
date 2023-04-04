import * as actionTypes from './actionTypes';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.USER_LOGIN:
			return {
				isAuth: true,
				name: action.payload.name,
				email: action.payload.email,
				token: action.payload.token,
			};
		case actionTypes.USER_LOGOUT:
			return { ...initialState };
		default:
			return state;
	}
};

export default userReducer;
