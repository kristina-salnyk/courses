import { clearAuthHeader, setAuthHeader } from '../services/api';
import { LOCAL_STORAGE_KEY } from '../constants';

export const setToken = (token) => {
	setAuthHeader(token);

	const serializedToken = JSON.stringify({ token });
	window.localStorage.setItem(LOCAL_STORAGE_KEY, serializedToken);
};

export const clearToken = () => {
	clearAuthHeader();
	window.localStorage.removeItem(LOCAL_STORAGE_KEY);
};
