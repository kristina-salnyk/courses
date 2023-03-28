import axios from 'axios';

import { BASE_URL } from '../../constants';

export const api = axios.create({
	baseURL: BASE_URL,
});

export const setAuthHeader = (token) => {
	api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
	axios.defaults.headers.common.Authorization = '';
};
