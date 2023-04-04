import { api } from './index';
import { API_ENDPOINTS } from '../../constants';

export const getCourses = async () => {
	return await api.get(API_ENDPOINTS.COURSES);
};
