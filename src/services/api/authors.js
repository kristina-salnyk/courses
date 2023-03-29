import { api } from './index';
import { API_ENDPOINTS } from '../../constants';

export const getAuthors = async () => {
	return await api.get(API_ENDPOINTS.AUTHORS);
};
