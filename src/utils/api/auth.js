import { api, setAuthHeader } from './api';
import { API_ENDPOINTS } from '../../constants';

export const register = async (user) => {
	return await api.post(API_ENDPOINTS.REGISTRATION, user);
};

export const login = async (user) => {
	return await api.post(API_ENDPOINTS.LOGIN, user);
};

export const current = async (token) => {
	setAuthHeader(token);
	return await api.get(API_ENDPOINTS.CURRENT);
};

export const logout = async () => {
	return await api.delete(API_ENDPOINTS.LOGOUT);
};
