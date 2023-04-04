import * as actionTypes from '../authors/actionTypes';

const authorsReducer = (state = [], action) => {
	switch (action.type) {
		case actionTypes.AUTHORS_ADD:
			return [action.payload, ...state];
		case actionTypes.AUTHORS_FETCH:
			return [...action.payload];
		default:
			return state;
	}
};

export default authorsReducer;
