import { useState } from 'react';

const useValidationErrors = () => {
	const [validationErrors, setValidationErrors] = useState([]);

	const validateOneField = (schema, name, value) => {
		(async () => {
			try {
				await schema.validateAt(name, { [name]: value });
				setValidationErrors((prevState) =>
					prevState.filter((item) => item.path !== name)
				);
			} catch (error) {
				setValidationErrors((prevState) => {
					const state = prevState.filter((item) => item.path !== name);
					state.push(error);
					return state;
				});
			}
		})();
	};

	const validateAllFields = async (schema, fields) => {
		try {
			await schema.validate(fields, {
				abortEarly: false,
			});
			return true;
		} catch (error) {
			setValidationErrors(Array.from(error.inner));
		}
		return false;
	};

	const errors = validationErrors.reduce((acc, item) => {
		if (!acc[item.path]) acc[item.path] = item?.message;
		return acc;
	}, {});

	return {
		validationErrors: errors,
		validateOneField,
		validateAllFields,
	};
};

export default useValidationErrors;
