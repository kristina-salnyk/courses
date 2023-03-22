export const VIEWS = {
	CREATE_NEW_COURSE: 'Create new course',
	COURSES: 'Courses',
};

export const GROUP_TITLES = {
	COURSE_AUTHORS: 'Course authors',
	DURATION: 'Duration',
	AUTHORS: 'Authors',
	ADD_AUTHOR: 'Add author',
};

export const CARD_TITLES = {
	COURSE_AUTHORS: 'Authors:',
	DURATION: 'Duration:',
	CREATED: 'Created:',
};

export const LOGO_ALTERNATIVE_TEXT = 'Logo with books and courses title';

export const ADD_NEW_AUTHOR_ERROR_TEXT = 'Author with this name already exists';

export const AUTHORS_INFO_TEXT = 'Author list is empty';

export const AUTHORS_LIST_NAME = 'authors';

export const ADD_NEW_COURSE_ERROR_TEXT = 'Please, fill in all fields';

export const DURATION_UNITS = 'hours';

export const LOGOUT_BTN = {
	type: 'button',
	text: 'Logout',
};

export const SHOW_COURSE_BTN = {
	type: 'button',
	text: 'Show course',
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

export const USER_NAME = 'Dave';

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
