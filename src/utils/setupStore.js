const setupStore = (initialState) => {
	return {
		getState: jest.fn(() => ({
			...initialState,
		})),
		subscribe: jest.fn(),
		dispatch: jest.fn(),
	};
};

export default setupStore;
