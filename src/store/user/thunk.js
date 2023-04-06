import { toast } from 'react-toastify';

import { current, login, logout, register } from '../../services/api/user';
import { loginUser, logoutUser } from './actionCreators';
import {
	LOGIN_RESPONSE_MESSAGES,
	REGISTRATION_RESPONSE_MESSAGES,
} from '../../constants';

export const fetchUser = (token) => async (dispatch, getState) => {
	const currentToken = token ?? getState().user.token;

	if (currentToken) {
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
			// dispatch(changeIsLoading(false));
		}
	}
};

export const fetchLogin = (user) => async (dispatch, getState) => {
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
			LOGIN_RESPONSE_MESSAGES[error.response?.status] ??
				LOGIN_RESPONSE_MESSAGES.default
		);
	} finally {
		// dispatch(changeIsLoading(false));
	}
};

export const fetchRegister = (user) => async (dispatch, getState) => {
	const result = { successful: false };

	try {
		const response = await register(user);
		const { data } = response;

		if (response.status === 201 && data.successful) {
			result.successful = true;
			toast.success(REGISTRATION_RESPONSE_MESSAGES[201]);
		} else {
			toast.error(
				REGISTRATION_RESPONSE_MESSAGES[response.status] ??
					REGISTRATION_RESPONSE_MESSAGES.default
			);
		}
	} catch (error) {
		toast.error(
			REGISTRATION_RESPONSE_MESSAGES[error.response?.status] ??
				REGISTRATION_RESPONSE_MESSAGES.default
		);
	} finally {
		// dispatch(changeIsLoading(false));
	}

	return result;
};

export const fetchLogout = async (dispatch, getState) => {
	try {
		await logout();
	} catch (error) {
	} finally {
		dispatch(logoutUser());
		// dispatch(changeIsLoading(false));
	}
};
