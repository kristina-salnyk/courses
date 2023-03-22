import { api } from './api';
import { API_ENDPOINTS } from '../../constants';

export const register = async (user) => {
	return await api.post(API_ENDPOINTS.REGISTRATION, user);
};

export const login = async (user) => {
	return await api.post(API_ENDPOINTS.LOGIN, user);
};
