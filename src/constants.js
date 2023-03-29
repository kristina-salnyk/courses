export const BASE_URL =
	'https://react-fundamentals-course-hw-backend.onrender.com';

export const LOCAL_STORAGE_KEY = 'root';

export const API_ENDPOINTS = {
	LOGIN: '/login',
	REGISTRATION: '/register',
	CURRENT: '/users/me',
	LOGOUT: '/logout',
	COURSES: '/courses/all',
	AUTHORS: '/authors/all',
};

export const REGISTRATION_STATUS = {
	201: 'Registration successfully completed',
	400: 'Registration is not completed. Check your credentials',
	500: 'Registration is not completed. Try again later',
	default: 'Registration is not completed. Try again later',
};

export const LOGIN_STATUS = {
	400: 'Not authorized. Wrong login or password',
	500: 'Not authorized. Try again later',
	default: 'Not authorized. Try again later',
};

export const GET_COURSES_STATUS = {
	400: 'Uploading course list failed',
	500: 'Uploading course list failed. Try again later',
	default: 'Uploading course list failed. Try again later',
};

export const GET_AUTHORS_STATUS = {
	400: 'Uploading author list failed',
	500: 'Uploading author list failed. Try again later',
	default: 'Uploading author list failed. Try again later',
};

export const ROUTES = {
	ROOT: '/',
	COURSES: '/courses',
	COURSE_INFO: '/courses/:courseId',
	CREATE_COURSE: '/courses/add',
	LOGIN: '/login',
	REGISTRATION: '/registration',
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

export const LOGO_ALTERNATIVE_TEXT = 'Logo with tag and courses title';

export const ADD_NEW_AUTHOR_ERROR_TEXT = 'Author with this name already exists';

export const REGISTRATION_INFO_TEXT = 'If you have an account you can go to';

export const LOGIN_INFO_TEXT = 'If you not have an account you can go to';

export const AUTHORS_INFO_TEXT = 'Author list is empty';

export const AUTHORS_LIST_NAME = 'authors';

export const SUBMIT_VALIDATION_ERROR_TEXT = 'Please, fill in all fields';

export const DURATION_UNITS = 'hours';

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

export const COURSES_LIST = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
		creationDate: '8/3/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];

export const AUTHORS_LIST = [
	{
		id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812b-ebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];
