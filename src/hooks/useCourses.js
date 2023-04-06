import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { getCourses } from '../services/api/courses';
import { setCourses } from '../store/courses/actionCreators';
import { COURSES_ALL_RESPONSE_MESSAGES } from '../constants';

const useCourses = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const fetchCourses = useCallback(async () => {
		setIsLoading(true);

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
				COURSES_ALL_RESPONSE_MESSAGES[error.response?.status] ??
					COURSES_ALL_RESPONSE_MESSAGES.default
			);
			dispatch(setCourses([]));
		} finally {
			setIsLoading(false);
		}
	}, [dispatch]);

	return { fetchCourses, isLoading };
};

export default useCourses;
