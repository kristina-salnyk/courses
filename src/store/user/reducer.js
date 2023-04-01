import * as actionTypes from './actionTypes';

const initialState = {
	isAuth: false,
	isLoading: false,
	isRefreshing: true,
	name: '',
	email: '',
	role: '',
	token: '',
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.USER_LOGIN:
			return { ...state, ...action.payload, isAuth: true };
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
