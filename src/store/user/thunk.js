import { toast } from 'react-toastify';

import { current, login, logout, register } from '../../services/api/user';
import { clearToken, setToken } from '../../helpers/tokenStore';
import { loginUser, logoutUser } from './actionCreators';
import {
	LOGIN_RESPONSE_MESSAGES,
	REGISTRATION_RESPONSE_MESSAGES,
} from '../../constants';

export const fetchUser =
	(token, changeIsLoading) => async (dispatch, getState) => {
		const currentToken = token ?? getState().user.token;

		if (currentToken) {
			try {
				const response = await current(currentToken);
				const { data } = response;

				if (response.status === 200 && data.successful) {
					const { name, email, role } = data.result;

					dispatch(
						loginUser({
							name,
							email,
							role,
							token: currentToken,
						})
					);

					setToken(currentToken);
				} else {
					dispatch(logoutUser());
					clearToken();
				}
			} catch (error) {
				dispatch(logoutUser());
				clearToken();
			} finally {
				changeIsLoading && changeIsLoading(false);
			}
		}
	};

export const fetchLogin = (user, changeIsLoading) => async (dispatch) => {
	try {
		changeIsLoading(true);

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
		changeIsLoading(false);
	}
};

export const fetchRegister = (user, changeIsLoading) => async () => {
	const result = { successful: false };

	try {
		changeIsLoading(true);

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
		changeIsLoading(false);
	}

	return result;
};

export const fetchLogout = (changeIsLoading) => async (dispatch) => {
	try {
		changeIsLoading(true);

		await logout();
	} catch (error) {
	} finally {
		dispatch(logoutUser());
		clearToken();

		changeIsLoading(false);
	}
};
