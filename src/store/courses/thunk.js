import { toast } from 'react-toastify';

import {
	addCourse,
	deleteCourse,
	getCourse,
	getCourses,
	updateCourse,
} from '../../services/api/courses';
import {
	addCourseAction,
	deleteCourseAction,
	setCoursesAction,
	updateCourseAction,
} from './actionCreators';
import {
	COURSE_RESPONSE_MESSAGES,
	COURSES_ADD_RESPONSE_MESSAGES,
	COURSES_ALL_RESPONSE_MESSAGES,
	COURSES_DELETE_RESPONSE_MESSAGES,
	COURSES_UPDATE_RESPONSE_MESSAGES,
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
			const courseObj = data.result;

			dispatch(addCourseAction(courseObj));
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

export const fetchUpdateCourse =
	(courseId, course, changeIsLoading) => async (dispatch) => {
		const result = { successful: false };

		try {
			changeIsLoading(true);

			const response = await updateCourse(courseId, course);
			const { data } = response;

			if (response.status === 200 && data.successful) {
				const courseObj = data.result;

				dispatch(updateCourseAction(courseObj));
				result.successful = true;
				toast.success(COURSES_UPDATE_RESPONSE_MESSAGES[200]);
			} else {
				toast.error(
					COURSES_UPDATE_RESPONSE_MESSAGES[response.status] ??
						COURSES_UPDATE_RESPONSE_MESSAGES.default
				);
			}
		} catch (error) {
			toast.error(
				COURSES_UPDATE_RESPONSE_MESSAGES[error.response?.status] ??
					COURSES_UPDATE_RESPONSE_MESSAGES.default
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
				toast.success(COURSES_DELETE_RESPONSE_MESSAGES[200]);
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

export const fetchCourse = (courseId, changeIsLoading) => async () => {
	const result = { successful: false, data: null };

	try {
		changeIsLoading(true);

		const response = await getCourse(courseId);
		const { data } = response;

		if (response.status === 200 && data.successful) {
			const courseObj = data.result;
			result.successful = true;
			result.data = courseObj;
		} else {
			toast.error(
				COURSE_RESPONSE_MESSAGES[response.status] ??
					COURSE_RESPONSE_MESSAGES.default
			);
		}
	} catch (error) {
		toast.error(
			COURSE_RESPONSE_MESSAGES[error.response?.status] ??
				COURSE_RESPONSE_MESSAGES.default
		);
	} finally {
		changeIsLoading(false);
	}

	return result;
};
