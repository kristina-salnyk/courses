import { api } from './index';
import { API_ENDPOINTS } from '../../constants';

export const getCourses = async () => {
	return await api.get(API_ENDPOINTS.COURSES);
};

export const getCourse = async (courseId) => {
	return await api.get(`${API_ENDPOINTS.UPDATE_COURSE}/${courseId}`);
};

export const addCourse = async (course) => {
	return await api.post(API_ENDPOINTS.ADD_COURSE, course);
};

export const updateCourse = async (courseId, course) => {
	return await api.put(`${API_ENDPOINTS.UPDATE_COURSE}/${courseId}`, course);
};

export const deleteCourse = async (courseId) => {
	return await api.delete(`${API_ENDPOINTS.UPDATE_COURSE}/${courseId}`);
};
