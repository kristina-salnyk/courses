export const LOCAL_STORAGE_KEY = 'token';

export const LOGO_ALTERNATIVE_TEXT = 'Logo with tag and courses title';

export const NO_RESULTS_ALTERNATIVE_TEXT = 'No results found';

export const ADD_NEW_AUTHOR_ERROR_TEXT = 'Author with this name already exists';

export const SUBMIT_VALIDATION_ERROR_TEXT = 'Please, fill in all fields';

export const REGISTRATION_NAVIGATION_TEXT =
	'If you have an account you can go to';

export const LOGIN_NAVIGATION_TEXT = 'If you not have an account you can go to';

export const AUTHORS_NO_RESULTS_TEXT = 'Author list is empty';

export const COURSES_NO_RESULTS_TEXT = 'Course list is empty';

export const COURSE_INFO_NO_RESULTS_TEXT = 'Course was not found';

export const AUTHORS_LIST_NAME = 'authors';

export const DURATION_UNITS = 'hours';

export const API_ENDPOINTS = {
	LOGIN: '/login',
	REGISTRATION: '/register',
	CURRENT: '/users/me',
	LOGOUT: '/logout',
	COURSES: '/courses/all',
	AUTHORS: '/authors/all',
};

export const ROUTES = {
	ROOT: '/',
	COURSES: '/courses',
	COURSE_INFO: '/courses/:courseId',
	CREATE_COURSE: '/courses/add',
	LOGIN: '/login',
	REGISTRATION: '/registration',
};

export const REGISTRATION_RESPONSE_MESSAGES = {
	201: 'Registration successfully completed',
	400: 'Registration is not completed. Check your credentials',
	500: 'Registration is not completed. Try again later',
	default: 'Registration is not completed. Try again later',
};

export const LOGIN_RESPONSE_MESSAGES = {
	400: 'Not authorized. Wrong login or password',
	500: 'Not authorized. Try again later',
	default: 'Not authorized. Try again later',
};

export const COURSES_ALL_RESPONSE_MESSAGES = {
	400: 'Course list has not been loaded',
	500: 'Course list has not been loaded. Try again later',
	default: 'Course list has not been loaded. Try again later',
};

export const AUTHORS_ALL_RESPONSE_MESSAGES = {
	400: 'Author list has not been loaded',
	500: 'Author list has not been loaded. Try again later',
	default: 'Author list has not been loaded. Try again later',
};

export const GROUP_TITLES = {
	COURSE_AUTHORS: 'Course authors',
	DURATION: 'Duration',
	AUTHORS: 'Authors',
	ADD_AUTHOR: 'Add author',
};

export const CARD_TITLES = {
	ID: 'ID:',
	COURSE_AUTHORS: 'Authors:',
	DURATION: 'Duration:',
	CREATED: 'Created:',
};

export const BACK_BTN = {
	text: 'Back',
};

export const LOGOUT_BTN = {
	type: 'button',
	text: 'Logout',
};

export const LOGIN_BTN = {
	type: 'submit',
	text: 'Login',
};

export const REGISTER_BTN = {
	type: 'submit',
	text: 'Registration',
};

export const SHOW_COURSE_BTN = {
	type: 'button',
	text: 'Show course',
};

export const DELETE_COURSE_BTN = {
	type: 'button',
	text: 'Delete course',
};

export const UPDATE_COURSE_BTN = {
	type: 'button',
	text: 'Update course',
};

export const SEARCH_BTN = {
	type: 'submit',
	text: 'Search',
};

export const CREATE_COURSE_BTN = {
	type: 'submit',
	text: 'Create course',
};

export const ADD_NEW_COURSE_BTN = {
	type: 'button',
	text: 'Add new course',
};

export const CREATE_AUTHOR_BTN = {
	type: 'button',
	text: 'Create author',
};

export const ADD_AUTHOR_BTN = {
	type: 'button',
	text: 'Add author',
};

export const DELETE_AUTHOR_BTN = {
	type: 'button',
	text: 'Delete author',
};

export const NAME_INPUT = {
	label: 'Name',
	type: 'text',
	placeholder: 'Enter name...',
	name: 'name',
};

export const EMAIL_INPUT = {
	label: 'Email',
	type: 'email',
	placeholder: 'Enter email...',
	name: 'email',
};

export const PASSWORD_INPUT = {
	label: 'Password',
	type: 'password',
	placeholder: 'Enter password...',
	name: 'password',
};

export const SEARCH_BAR_INPUT = {
	type: 'search',
	placeholder: 'Enter course name or id...',
};

export const TITLE_INPUT = {
	label: 'Title',
	type: 'text',
	placeholder: 'Enter title...',
	name: 'title',
};

export const AUTHOR_NAME_INPUT = {
	label: 'Author name',
	type: 'text',
	placeholder: 'Enter author name...',
};

export const DESCRIPTION_TEXT_AREA = {
	label: 'Description',
	rows: 5,
	placeholder: 'Enter description...',
	name: 'description',
};

export const DURATION_INPUT = {
	label: 'Duration',
	type: 'number',
	min: 0,
	placeholder: 'Enter duration in minutes...',
	name: 'duration',
};
