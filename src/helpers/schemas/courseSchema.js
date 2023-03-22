import * as yup from 'yup';

const courseSchema = yup.object().shape({
	title: yup
		.string()
		.required('Title field must be filled')
		.min(2, 'Title must contain from 2 to 50 characters')
		.max(50, 'Title must contain from 2 to 50 characters'),
	description: yup
		.string()
		.required('Description field must be filled')
		.max(1000, 'Description must contain no more than 1000 characters'),
	authors: yup.array().min(1, 'Course must include at least one author'),
	duration: yup
		.number()
		.required('Duration field must be filled')
		.positive('Duration must be a positive number')
		.integer('Duration must be an integer number in minutes'),
});

export default courseSchema;
