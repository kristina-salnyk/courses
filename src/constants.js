export const LOCAL_STORAGE_KEY = 'token';

export const LOGO_ALTERNATIVE_TEXT = 'Logo with courses title';

export const NO_RESULTS_ALTERNATIVE_TEXT = 'No results found';

export const ADD_NEW_AUTHOR_ERROR_TEXT = 'Author with this name already exists';

export const SUBMIT_VALIDATION_ERROR_TEXT = 'Please, fill in all fields';

export const REGISTRATION_NAVIGATE_TEXT =
	'If you have an account you can go to';

export const LOGIN_NAVIGATE_TEXT = 'If you not have an account you can go to';

export const AUTHORS_NO_RESULTS_TEXT = 'Author list is empty';

export const COURSES_NO_RESULTS_TEXT = 'Course list is empty';

export const COURSE_INFO_NO_RESULTS_TEXT = 'Course was not found';

export const AUTHORS_LIST_NAME = 'authors';

export const DURATION_UNITS = 'hours';

export const ROLES = {
	USER: 'user',
	ADMIN: 'admin',
};

export const API_ENDPOINTS = {
	LOGIN: '/login',
	REGISTRATION: '/register',
	CURRENT: '/users/me',
	LOGOUT: '/logout',
	COURSES: '/courses/all',
	COURSE: '/courses',
	ADD_COURSE: '/courses/add',
	UPDATE_COURSE: '/courses',
	DELETE_COURSE: '/courses',
	AUTHORS: '/authors/all',
	ADD_AUTHOR: '/authors/add',
};

export const ROUTES = {
	ROOT: '/',
	COURSES: '/courses',
	COURSE_INFO: '/courses/:courseId',
	CREATE_COURSE: '/courses/add',
	UPDATE_COURSE: '/courses/update/:courseId',
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

export const COURSE_RESPONSE_MESSAGES = {
	400: 'Course has not been loaded',
	500: 'Course has not been loaded. Try again later',
	default: 'Course has not been loaded. Try again later',
};

export const AUTHORS_ALL_RESPONSE_MESSAGES = {
	400: 'Author list has not been loaded',
	500: 'Author list has not been loaded. Try again later',
	default: 'Author list has not been loaded. Try again later',
};

export const AUTHORS_ADD_RESPONSE_MESSAGES = {
	201: 'Author successfully added',
	400: 'Author has not been added',
	500: 'Author has not been added. Try again later',
	default: 'Author has not been added. Try again later',
};

export const COURSES_ADD_RESPONSE_MESSAGES = {
	201: 'Course successfully added',
	400: 'Course has not been added',
	500: 'Course has not been added. Try again later',
	default: 'Course has not been added. Try again later',
};

export const COURSES_UPDATE_RESPONSE_MESSAGES = {
	200: 'Course successfully updated',
	400: 'Course has not been updated',
	500: 'Course has not been updated. Try again later',
	default: 'Course has not been updated. Try again later',
};

export const COURSES_DELETE_RESPONSE_MESSAGES = {
	200: 'Course successfully deleted',
	400: 'Course has not been deleted',
	500: 'Course has not been deleted. Try again later',
	default: 'Course has not been deleted. Try again later',
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
	type: 'submit',
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

export const MOCKED_COURSES_LIST = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the typesetting industry.`,
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
		description: `Lorem Ipsum is simply dummy text of the printing.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: ['df32994e-b23d-497c-9e4d-84e4dc02882f'],
	},
];

export const MOCKED_AUTHORS_LIST = [
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

export const MOCKED_STATE = {
	user: {
		isAuth: true,
		name: 'Test Name',
		role: 'user',
	},
	courses: [],
	authors: [],
};
