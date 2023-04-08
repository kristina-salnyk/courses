import * as actionTypes from './actionTypes';

export const addAuthorAction = ({ id, name }) => {
	return {
		type: actionTypes.AUTHORS_ADD,
		payload: {
			id,
			name,
		},
	};
};

export const setAuthorsAction = (authors) => {
	return {
		type: actionTypes.AUTHORS_FETCH,
		payload: [...authors],
	};
};
