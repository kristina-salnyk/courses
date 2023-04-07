import { toast } from 'react-toastify';

import { getCourses } from '../../services/api/courses';
import { setCourses } from './actionCreators';
import { COURSES_ALL_RESPONSE_MESSAGES } from '../../constants';

export const fetchCourses = (changeIsLoading) => async (dispatch) => {
	try {
		changeIsLoading(true);

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
			COURSES_ALL_RESPONSE_MESSAGES[error.response?.status] ??
				COURSES_ALL_RESPONSE_MESSAGES.default
		);
		dispatch(setCourses([]));
	} finally {
		changeIsLoading(false);
	}
};
