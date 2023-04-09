import * as actionTypes from './actionTypes';

export const addCourseAction = ({
	id,
	title,
	description,
	duration,
	authors,
	creationDate,
}) => {
	return {
		type: actionTypes.COURSES_ADD,
		payload: {
			id,
			title,
			description,
			authors,
			duration,
			creationDate,
		},
	};
};

export const deleteCourseAction = (id) => {
	return {
		type: actionTypes.COURSES_DELETE,
		payload: { id },
	};
};

export const updateCourseAction = (course) => {
	return {
		type: actionTypes.COURSES_UPDATE,
		payload: { ...course },
	};
};

export const setCoursesAction = (courses) => {
	return {
		type: actionTypes.COURSES_FETCH,
		payload: [...courses],
	};
};
