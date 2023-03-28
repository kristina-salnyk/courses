import * as actionTypes from './actionTypes';

const initialState = {
	isAuth: false,
	isRefreshing: true,
	name: '',
	email: '',
	token: '',
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.USER_LOGIN:
			return {
				isAuth: true,
				isRefreshing: false,
				name: action.payload.name,
				email: action.payload.email,
				token: action.payload.token,
			};
		case actionTypes.USER_LOGOUT:
			return { ...initialState, isRefreshing: false };
		case actionTypes.USER_UPDATE:
			return { ...state, ...action.payload };
		case actionTypes.PERSIST_REHYDRATE:
			return { ...state, ...action.payload?.user };
		default:
			return state;
	}
};

export default userReducer;
