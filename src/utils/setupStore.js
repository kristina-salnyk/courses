const setupStore = (initialState) => {
	return {
		getState: jest.fn(() => ({
			...initialState,
		})),
		subscribe: jest.fn(),
		dispatch: jest.fn(() => ({
			successful: true,
		})),
	};
};

export default setupStore;
