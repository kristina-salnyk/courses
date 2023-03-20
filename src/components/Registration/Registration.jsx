import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { Container } from '../../common/Container';
import { Input } from '../../common/Input';
import { ValidationMessage } from '../../common/ValidationMessage';
import registerSchema from '../../helpers/schemas/registerSchema';
import register from '../../utils/api/register';
import {
	EMAIL_INPUT,
	LOGIN_BTN,
	NAME_INPUT,
	PASSWORD_INPUT,
	REGISTER_BTN,
	REGISTRATION_INFO_TEXT,
	ROUTES,
} from '../../constants';

import {
	ButtonStyled,
	FieldWrapStyled,
	InfoMessage,
	LinkStyled,
	RegistrationContent,
	RegistrationForm,
	RegistrationStyled,
} from './Registration.styled';

const Registration = () => {
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [validationError, setValidationError] = useState([]);

	const validateField = (name, value) => {
		(async () => {
			try {
				await registerSchema.validateAt(name, {
					[name]: value,
				});
				setValidationError((prevState) =>
					prevState.filter((item) => item.path !== name)
				);
			} catch (error) {
				setValidationError((prevState) => {
					const state = prevState.filter((item) => item.path !== name);
					state.push(error);
					return state;
				});
			}
		})();
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();

		const user = {
			name,
			email,
			password,
		};

		(async () => {
			try {
				const response = await register(user);
				const { data } = response;

				if (response.status === 201 && data.successful) {
					toast.success('Registration completed!');
					navigate(ROUTES.LOGIN);
				}
			} catch (error) {
				toast.error(error.message);
			}
		})();
	};

	const getValidationError = (fieldName) =>
		validationError.find((item) => item.path === fieldName)?.message;

	const nameValidationError = getValidationError(NAME_INPUT.name);
	const emailValidationError = getValidationError(EMAIL_INPUT.name);
	const passwordValidationError = getValidationError(PASSWORD_INPUT.name);

	return (
		<RegistrationStyled>
			<Container>
				<RegistrationForm onSubmit={formSubmitHandler}>
					<RegistrationContent>
						<FieldWrapStyled>
							<Input
								label={NAME_INPUT.label}
								type={NAME_INPUT.type}
								value={name}
								error={Boolean(nameValidationError)}
								placeholder={NAME_INPUT.placeholder}
								onChange={(event) => {
									setName(event.target.value);
									validateField(NAME_INPUT.name, event.target.value);
								}}
							/>
							{nameValidationError && (
								<ValidationMessage message={nameValidationError} />
							)}
						</FieldWrapStyled>
						<FieldWrapStyled>
							<Input
								label={EMAIL_INPUT.label}
								type={EMAIL_INPUT.type}
								value={email}
								error={Boolean(emailValidationError)}
								placeholder={EMAIL_INPUT.placeholder}
								onChange={(event) => {
									setEmail(event.target.value);
									validateField(EMAIL_INPUT.name, event.target.value);
								}}
							/>
							{emailValidationError && (
								<ValidationMessage message={emailValidationError} />
							)}
						</FieldWrapStyled>
						<FieldWrapStyled>
							<Input
								label={PASSWORD_INPUT.label}
								type={PASSWORD_INPUT.type}
								value={password}
								error={Boolean(passwordValidationError)}
								placeholder={PASSWORD_INPUT.placeholder}
								onChange={(event) => {
									setPassword(event.target.value);
									validateField(PASSWORD_INPUT.name, event.target.value);
								}}
							/>
							{passwordValidationError && (
								<ValidationMessage message={passwordValidationError} />
							)}
						</FieldWrapStyled>
						<ButtonStyled type={REGISTER_BTN.type} text={REGISTER_BTN.text} />
						<InfoMessage>
							{REGISTRATION_INFO_TEXT}{' '}
							<LinkStyled to={ROUTES.LOGIN}>{LOGIN_BTN.text}</LinkStyled>
						</InfoMessage>
					</RegistrationContent>
				</RegistrationForm>
			</Container>
		</RegistrationStyled>
	);
};

export default Registration;
