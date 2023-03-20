import { api } from './api';
import { API_ENDPOINTS } from '../../constants';

const register = async (user) => {
	return await api.post(API_ENDPOINTS.REGISTRATION, user);
};

export default register;
