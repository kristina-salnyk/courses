import { toast } from 'react-toastify';

import { getCourses } from '../../services/api/courses';
import { changeIsLoading, setCourses } from './actionCreators';
import { COURSES_ALL_RESPONSE_MESSAGES } from '../../constants';

export const fetchCourses = async (dispatch, getState) => {
	dispatch(changeIsLoading(true));

	try {
		const response = await getCourses();
		const { data } = response;

		if (response.status === 200 && data.successful) {
			const courses = data.result;

			dispatch(setCourses(courses));
		} else {
			toast.error(
				COURSES_ALL_RESPONSE_MESSAGES[response.status] ??
					COURSES_ALL_RESPONSE_MESSAGES.default
			);
			dispatch(setCourses([]));
		}
	} catch (error) {
		toast.error(
			COURSES_ALL_RESPONSE_MESSAGES[error.response.status] ??
				COURSES_ALL_RESPONSE_MESSAGES.default
		);
		dispatch(setCourses([]));
	} finally {
		dispatch(changeIsLoading(false));
	}
};
