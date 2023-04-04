import { v4 as uuid } from 'uuid';

import * as actionTypes from './actionTypes';

export const addAuthor = ({ name }) => {
	return {
		type: actionTypes.AUTHORS_ADD,
		payload: {
			id: uuid(),
			name,
		},
	};
};

export const setAuthors = (authors) => {
	return {
		type: actionTypes.AUTHORS_FETCH,
		payload: [...authors],
	};
};
