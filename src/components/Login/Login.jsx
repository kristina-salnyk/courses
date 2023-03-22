import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Container } from '../../common/Container';
import { Input } from '../../common/Input';
import { ValidationMessage } from '../../common/ValidationMessage';
import { useUser } from '../../contexts/UserContext';
import { setAuthHeader } from '../../utils/api/api';
import { login } from '../../utils/api/auth';
import loginSchema from '../../helpers/schemas/loginSchema';
import {
	EMAIL_INPUT,
	LOGIN_BTN,
	LOGIN_INFO_TEXT,
	LOGIN_STATUS,
	PASSWORD_INPUT,
	REGISTER_BTN,
	ROUTES,
	SUBMIT_VALIDATION_ERROR_TEXT,
} from '../../constants';

import {
	ButtonStyled,
	FieldWrapStyled,
	InfoMessage,
	LinkStyled,
	LoginContent,
	LoginForm,
	LoginStyled,
} from './Login.styled';

const Login = () => {
	const { setIsLoggedIn, setUser, setToken } = useUser();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [validationError, setValidationError] = useState([]);

	const validateField = (name, value) => {
		(async () => {
			try {
				await loginSchema.validateAt(name, { [name]: value });
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

	const formSubmitHandler = async (event) => {
		event.preventDefault();

		const user = {
			email,
			password,
		};

		try {
			await loginSchema.validate(user, {
				abortEarly: false,
			});
		} catch (error) {
			setValidationError(Array.from(error.inner));
			toast.error(SUBMIT_VALIDATION_ERROR_TEXT);
			return;
		}

		try {
			const response = await login(user);
			const { data } = response;

			if (response.status === 201 && data.successful) {
				setAuthHeader(response.data.token);
				setIsLoggedIn(true);
				setToken(data.result);
				setUser({ ...data.user });
			} else {
				toast.error(LOGIN_STATUS[response.status] ?? LOGIN_STATUS.default);
			}
		} catch (error) {
			toast.error(LOGIN_STATUS[error.response.status] ?? LOGIN_STATUS.default);
		}
	};

	const getValidationError = (fieldName) =>
		validationError.find((item) => item.path === fieldName)?.message;

	const emailValidationError = getValidationError(EMAIL_INPUT.name);
	const passwordValidationError = getValidationError(PASSWORD_INPUT.name);

	return (
		<LoginStyled>
			<Container>
				<LoginForm onSubmit={formSubmitHandler}>
					<LoginContent>
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
						<ButtonStyled type={LOGIN_BTN.type} text={LOGIN_BTN.text} />
						<InfoMessage>
							{LOGIN_INFO_TEXT}{' '}
							<LinkStyled to={ROUTES.REGISTRATION}>
								{REGISTER_BTN.text}
							</LinkStyled>
						</InfoMessage>
					</LoginContent>
				</LoginForm>
			</Container>
		</LoginStyled>
	);
};

export default Login;
