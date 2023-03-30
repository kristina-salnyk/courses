import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { store } from '../store';
import { getAuthors } from '../services/api/authors';
import { setAuthors } from '../store/authors/actionCreators';
import { AUTHORS_ALL_RESPONSE_MESSAGES } from '../constants';

const useAuthors = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		// not erase the manipulations with the array of authors made locally
		const state = store.getState();
		if (state.authors.length > 0) return;

		(async () => {
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
					AUTHORS_ALL_RESPONSE_MESSAGES[error.response.status] ??
						AUTHORS_ALL_RESPONSE_MESSAGES.default
				);
				dispatch(setAuthors([]));
			} finally {
				setIsLoading(false);
			}
		})();
	}, [dispatch]);

	return { isAuthorsLoading: isLoading };
};

export default useAuthors;
