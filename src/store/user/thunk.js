import { toast } from 'react-toastify';

import { current, login } from '../../services/api/user';
import {
	changeIsLoading,
	changeIsRefreshing,
	loginUser,
	logoutUser,
} from './actionCreators';
import { LOGIN_RESPONSE_MESSAGES } from '../../constants';

export const fetchUser = (token) => async (dispatch, getState) => {
	const currentToken = token ?? getState().user.token;

	if (currentToken) {
		dispatch(changeIsLoading(true));

		try {
			const response = await current(currentToken);
			const { data } = response;

			if (response.status === 200 && data.successful) {
				const { name, email, role } = data.result;

				dispatch(loginUser({ name, email, role, currentToken }));
			} else {
				dispatch(logoutUser());
			}
		} catch (error) {
			dispatch(logoutUser());
		} finally {
			dispatch(changeIsLoading(false));
		}
	}

	dispatch(changeIsRefreshing(false));
};

export const fetchLogin = (user) => async (dispatch, getState) => {
	dispatch(changeIsLoading(true));

	try {
		const response = await login(user);
		const { data } = response;

		if (response.status === 201 && data.successful) {
			const [, token] = data.result.split(' ');

			await dispatch(fetchUser(token));
		} else {
			toast.error(
				LOGIN_RESPONSE_MESSAGES[response.status] ??
					LOGIN_RESPONSE_MESSAGES.default
			);
		}
	} catch (error) {
		toast.error(
			LOGIN_RESPONSE_MESSAGES[error.response.status] ??
				LOGIN_RESPONSE_MESSAGES.default
		);
	} finally {
		dispatch(changeIsLoading(false));
	}
};
