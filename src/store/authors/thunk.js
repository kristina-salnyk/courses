import { toast } from 'react-toastify';

import { addAuthor, getAuthors } from '../../services/api/authors';
import { addAuthorAction, setAuthorsAction } from './actionCreators';
import {
	AUTHORS_ADD_RESPONSE_MESSAGES,
	AUTHORS_ALL_RESPONSE_MESSAGES,
} from '../../constants';

export const fetchAuthors = (changeIsLoading) => async (dispatch) => {
	try {
		changeIsLoading && changeIsLoading(true);

		const response = await getAuthors();
		const { data } = response;

		if (response.status === 200 && data.successful) {
			const authors = data.result.reverse();

			dispatch(setAuthorsAction(authors));
		} else {
			toast.error(
				AUTHORS_ALL_RESPONSE_MESSAGES[response.status] ??
					AUTHORS_ALL_RESPONSE_MESSAGES.default
			);
			dispatch(setAuthorsAction([]));
		}
	} catch (error) {
		toast.error(
			AUTHORS_ALL_RESPONSE_MESSAGES[error.response?.status] ??
				AUTHORS_ALL_RESPONSE_MESSAGES.default
		);
		dispatch(setAuthorsAction([]));
	} finally {
		changeIsLoading && changeIsLoading(false);
	}
};

export const fetchAddAuthor = (author, changeIsLoading) => async (dispatch) => {
	const result = { successful: false };

	try {
		changeIsLoading(true);

		const response = await addAuthor(author);
		const { data } = response;

		if (response.status === 201 && data.successful) {
			const newAuthor = data.result;

			dispatch(addAuthorAction(newAuthor));
			result.successful = true;
			toast.success(AUTHORS_ADD_RESPONSE_MESSAGES[201]);
		} else {
			toast.error(
				AUTHORS_ADD_RESPONSE_MESSAGES[response.status] ??
					AUTHORS_ADD_RESPONSE_MESSAGES.default
			);
		}
	} catch (error) {
		toast.error(
			AUTHORS_ADD_RESPONSE_MESSAGES[error.response?.status] ??
				AUTHORS_ADD_RESPONSE_MESSAGES.default
		);
	} finally {
		changeIsLoading(false);
	}

	return result;
};
