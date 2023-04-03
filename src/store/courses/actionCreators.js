import { v4 as uuid } from 'uuid';

import * as actionTypes from './actionTypes';
import dateGenerator from '../../helpers/dateGenerator';

export const addCourse = ({ title, description, duration, authors }) => {
	return {
		type: actionTypes.COURSES_ADD,
		payload: {
			id: uuid(),
			title,
			description,
			authors,
			duration,
			creationDate: dateGenerator(),
		},
	};
};

export const deleteCourse = (id) => {
	return {
		type: actionTypes.COURSES_DELETE,
		payload: { id },
	};
};

export const updateCourse = (id, course) => {
	return {
		type: actionTypes.COURSES_UPDATE,
		payload: { ...course, id },
	};
};

export const setCourses = (courses) => {
	return {
		type: actionTypes.COURSES_FETCH,
		payload: [...courses],
	};
};

export const changeIsLoading = (isLoading) => {
	return {
		type: actionTypes.COURSES_LOADING,
		payload: { isLoading },
	};
};
