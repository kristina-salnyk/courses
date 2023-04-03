import * as actionTypes from './actionTypes';

const initialState = {
	isLoading: false,
	items: [],
};

const coursesReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.COURSES_ADD:
			return { ...state, items: [action.payload, ...state.items] };
		case actionTypes.COURSES_DELETE:
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload.id),
			};
		case actionTypes.COURSES_UPDATE:
			const courseIdx = state.items.indexOf(
				(item) => item.id === action.payload.id
			);
			return {
				...state,
				items: [
					...state.items.slice(0, courseIdx),
					{ ...state.items[courseIdx], ...action.payload },
					...state.items.slice(courseIdx + 1),
				],
			};
		case actionTypes.COURSES_FETCH:
			return { ...state, items: [...action.payload] };
		case actionTypes.COURSES_LOADING:
			return { ...state, isLoading: action.payload.isLoading };
		default:
			return state;
	}
};

export default coursesReducer;
