import { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { current } from '../services/api/user';
import { clearToken } from '../helpers/tokenStore';
import { loginUser, logoutUser } from '../store/user/actionCreators';
import { LOCAL_STORAGE_KEY } from '../constants';

const useUser = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const isRefreshing = useRef(false);

	const fetchUser = useCallback(async () => {
		isRefreshing.current = true;

		const serializedToken = window.localStorage.getItem(LOCAL_STORAGE_KEY);

		if (!serializedToken) {
			setIsLoading(false);
			return;
		}

		const { token } = JSON.parse(serializedToken);

		try {
			const response = await current(token);
			const { data } = response;

			if (response.status === 200 && data.successful) {
				const { name, email } = data.result;

				dispatch(loginUser({ name, email, token }));
			} else {
				dispatch(logoutUser());
				clearToken();
			}
		} catch (error) {
			dispatch(logoutUser());
			clearToken();
		} finally {
			setIsLoading(false);
		}

		isRefreshing.current = false;
	}, [dispatch]);

	return { fetchUser, isLoading, isRefreshing };
};

export default useUser;
