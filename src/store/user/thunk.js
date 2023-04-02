import { current } from '../../services/api/user';
import { loginUser, updateUser } from './actionCreators';

export const fetchUser = (token) => async (dispatch, getState) => {
	const currentToken = token ?? getState().user.token;

	if (currentToken) {
		dispatch(updateUser({ isLoading: true }));

		try {
			const response = await current(currentToken);
			const { data } = response;

			if (response.status === 200 && data.successful) {
				const { name, email, role } = data.result;

				dispatch(loginUser({ name, email, role, currentToken }));
			} else {
				dispatch(updateUser({ token: '' }));
			}
		} catch (error) {
			dispatch(updateUser({ token: '' }));
		} finally {
			dispatch(updateUser({ isLoading: false }));
		}
	}

	dispatch(updateUser({ isRefreshing: false }));
};
