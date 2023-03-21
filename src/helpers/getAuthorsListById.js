import { MOCKED_AUTHORS_LIST } from '../constants';

const getAuthorsListById = (authorsId) =>
	authorsId
		.map(
			(item) => MOCKED_AUTHORS_LIST.find((author) => author.id === item)?.name
		)
		.join(', ');

export default getAuthorsListById;
