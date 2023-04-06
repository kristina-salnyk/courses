import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { getAuthors } from '../services/api/authors';
import { setAuthors } from '../store/authors/actionCreators';
import { AUTHORS_ALL_RESPONSE_MESSAGES } from '../constants';

const useAuthors = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const fetchAuthors = useCallback(async () => {
		setIsLoading(true);

		try {
			const response = await getAuthors();
			const { data } = response;

			if (response.status === 200 && data.successful) {
				const authors = data.result;

				dispatch(setAuthors(authors));
			} else {
				toast.error(
					AUTHORS_ALL_RESPONSE_MESSAGES[response.status] ??
						AUTHORS_ALL_RESPONSE_MESSAGES.default
				);
				dispatch(setAuthors([]));
			}
		} catch (error) {
			toast.error(
				AUTHORS_ALL_RESPONSE_MESSAGES[error.response?.status] ??
					AUTHORS_ALL_RESPONSE_MESSAGES.default
			);
			dispatch(setAuthors([]));
		} finally {
			setIsLoading(false);
		}
	}, [dispatch]);

	return { fetchAuthors, isLoading };
};

export default useAuthors;
