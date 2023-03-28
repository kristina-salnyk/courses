const authorsReducer = (state = [], action) => {
	switch (action.type) {
		case 'authors/addAuthor':
			return [...state, action.payload];
		case 'authors/setAuthors':
			return [...state, ...action.payload];
		default:
			return state;
	}
};

export default authorsReducer;
