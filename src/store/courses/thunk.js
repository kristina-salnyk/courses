import { toast } from 'react-toastify';

import {
	addCourse,
	deleteCourse,
	getCourses,
} from '../../services/api/courses';
import {
	addCourseAction,
	deleteCourseAction,
	setCoursesAction,
} from './actionCreators';
import {
	COURSES_ADD_RESPONSE_MESSAGES,
	COURSES_ALL_RESPONSE_MESSAGES,
	COURSES_DELETE_RESPONSE_MESSAGES,
} from '../../constants';

export const fetchCourses = (changeIsLoading) => async (dispatch) => {
	try {
		changeIsLoading && changeIsLoading(true);

		const response = await getCourses();
		const { data } = response;

		if (response.status === 200 && data.successful) {
			const courses = data.result.reverse();

			dispatch(setCoursesAction(courses));
		} else {
			toast.error(
				COURSES_ALL_RESPONSE_MESSAGES[response.status] ??
					COURSES_ALL_RESPONSE_MESSAGES.default
			);
			dispatch(setCoursesAction([]));
		}
	} catch (error) {
		toast.error(
			COURSES_ALL_RESPONSE_MESSAGES[error.response?.status] ??
				COURSES_ALL_RESPONSE_MESSAGES.default
		);
		dispatch(setCoursesAction([]));
	} finally {
		changeIsLoading && changeIsLoading(false);
	}
};

export const fetchAddCourse = (course, changeIsLoading) => async (dispatch) => {
	const result = { successful: false };

	try {
		changeIsLoading(true);

		const response = await addCourse(course);
		const { data } = response;

		if (response.status === 201 && data.successful) {
			const newCourse = data.result;

			dispatch(addCourseAction(newCourse));
			result.successful = true;
			toast.success(COURSES_ADD_RESPONSE_MESSAGES[201]);
		} else {
			toast.error(
				COURSES_ADD_RESPONSE_MESSAGES[response.status] ??
					COURSES_ADD_RESPONSE_MESSAGES.default
			);
		}
	} catch (error) {
		toast.error(
			COURSES_ADD_RESPONSE_MESSAGES[error.response?.status] ??
				COURSES_ADD_RESPONSE_MESSAGES.default
		);
	} finally {
		changeIsLoading(false);
	}

	return result;
};

export const fetchDeleteCourse =
	(courseId, changeIsLoading) => async (dispatch) => {
		try {
			changeIsLoading(true);

			const response = await deleteCourse(courseId);
			const { data } = response;

			if (response.status === 200 && data.successful) {
				dispatch(deleteCourseAction(courseId));
				toast.success(COURSES_DELETE_RESPONSE_MESSAGES[201]);
			} else {
				toast.error(
					COURSES_DELETE_RESPONSE_MESSAGES[response.status] ??
						COURSES_DELETE_RESPONSE_MESSAGES.default
				);
			}
		} catch (error) {
			toast.error(
				COURSES_DELETE_RESPONSE_MESSAGES[error.response?.status] ??
					COURSES_DELETE_RESPONSE_MESSAGES.default
			);
		} finally {
			changeIsLoading(false);
		}
	};
