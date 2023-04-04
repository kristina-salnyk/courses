import axios from 'axios';

const REACT_APP_URL =
	process.env.REACT_APP_NODE_ENV === 'development'
		? process.env.REACT_APP_DEV_URL
		: process.env.REACT_APP_PROD_URL;

export const api = axios.create({
	baseURL: REACT_APP_URL,
});

export const setAuthHeader = (token) => {
	api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
	api.defaults.headers.common.Authorization = '';
};
