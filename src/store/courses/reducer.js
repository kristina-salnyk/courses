const coursesReducer = (state = [], action) => {
	switch (action.type) {
		case 'courses/addCourse':
			return [...state, action.payload];
		case 'courses/deleteCourse':
			return state.filter((item) => item.id !== action.payload);
		case 'course/updateCourse':
			return [...state, ...action.payload];
		case 'course/setCourses':
			return [...action.payload];
		default:
			return state;
	}
};

export default coursesReducer;
