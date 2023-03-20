import * as yup from 'yup';

const loginSchema = yup.object().shape({
	email: yup
		.string()
		.required('Email field must be filled')
		.email('Email must be valid')
		.matches(
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
			'Email must be valid'
		),
	password: yup
		.string()
		.required('Password field must be filled')
		.min(6, 'Name must contain from 6 to 20 characters')
		.max(20, 'Name must contain from 6 to 20 characters')
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
			'Password must contain at least one letter, one digit, and one special character'
		),
});

export default loginSchema;
