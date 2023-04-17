import * as actionTypes from './actionTypes';

const coursesReducer = (state = [], action) => {
	switch (action.type) {
		case actionTypes.COURSES_ADD:
			return [action.payload, ...state];
		case actionTypes.COURSES_DELETE:
			return state.filter((item) => item.id !== action.payload.id);
		case actionTypes.COURSES_UPDATE:
			const courseIdx = state.findIndex(
				(item) => item.id === action.payload.id
			);
			return [
				...state.slice(0, courseIdx),
				{ ...state[courseIdx], ...action.payload },
				...state.slice(courseIdx + 1),
			];
		case actionTypes.COURSES_FETCH:
			return [...action.payload];
		default:
			return state;
	}
};

export default coursesReducer;
