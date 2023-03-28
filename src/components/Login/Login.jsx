import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Container } from '../../common/Container';
import { Input } from '../../common/Input';
import { Loader } from '../../common/Loader';
import { ValidationMessage } from '../../common/ValidationMessage';
import { useUser } from '../../contexts/UserContext';
import { login } from '../../utils/api/auth';
import useValidationErrors from '../../hooks/useValidationErrors';
import loginSchema from '../../helpers/schemas/loginSchema';
import {
	EMAIL_INPUT,
	LOGIN_BTN,
	LOGIN_INFO_TEXT,
	LOGIN_STATUS,
	PASSWORD_INPUT,
	REGISTER_BTN,
	ROUTES,
} from '../../constants';

import {
	ButtonStyled,
	FieldWrapStyled,
	LinkStyled,
	LoginForm,
	LoginFormContent,
	LoginFormMessage,
	LoginStyled,
} from './Login.styled';

const Login = () => {
	const { setIsLoggedIn, setUser, setToken } = useUser();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const { validationErrors, validateOneField, validateAllFields } =
		useValidationErrors();

	const formSubmitHandler = async (event) => {
		event.preventDefault();

		const user = {
			email,
			password,
		};

		const isValid = await validateAllFields(loginSchema, user);
		if (!isValid) return;

		setIsLoading(true);

		try {
			const response = await login(user);
			const { data } = response;

			if (response.status === 201 && data.successful) {
				const [, token] = data.result.split(' ');

				setIsLoggedIn(true);
				setToken(token);
				setUser({ ...data.user });
			} else {
				toast.error(LOGIN_STATUS[response.status] ?? LOGIN_STATUS.default);
			}
		} catch (error) {
			toast.error(LOGIN_STATUS[error.response.status] ?? LOGIN_STATUS.default);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<LoginStyled>
			<Container>
				<LoginForm onSubmit={formSubmitHandler}>
					{isLoading && <Loader />}
					<LoginFormContent>
						<FieldWrapStyled>
							<Input
								label={EMAIL_INPUT.label}
								type={EMAIL_INPUT.type}
								value={email}
								error={Boolean(validationErrors[EMAIL_INPUT.name])}
								placeholder={EMAIL_INPUT.placeholder}
								onChange={(event) => {
									setEmail(event.target.value);
									validateOneField(
										loginSchema,
										EMAIL_INPUT.name,
										event.target.value
									);
								}}
							/>
							{validationErrors[EMAIL_INPUT.name] && (
								<ValidationMessage
									message={validationErrors[EMAIL_INPUT.name]}
								/>
							)}
						</FieldWrapStyled>
						<FieldWrapStyled>
							<Input
								label={PASSWORD_INPUT.label}
								type={PASSWORD_INPUT.type}
								value={password}
								error={Boolean(validationErrors[PASSWORD_INPUT.name])}
								placeholder={PASSWORD_INPUT.placeholder}
								onChange={(event) => {
									setPassword(event.target.value);
									validateOneField(
										loginSchema,
										PASSWORD_INPUT.name,
										event.target.value
									);
								}}
							/>
							{validationErrors[PASSWORD_INPUT.name] && (
								<ValidationMessage
									message={validationErrors[PASSWORD_INPUT.name]}
								/>
							)}
						</FieldWrapStyled>
						<ButtonStyled type={LOGIN_BTN.type} text={LOGIN_BTN.text} />
						<LoginFormMessage>
							{LOGIN_INFO_TEXT}{' '}
							<LinkStyled to={ROUTES.REGISTRATION}>
								{REGISTER_BTN.text}
							</LinkStyled>
						</LoginFormMessage>
					</LoginFormContent>
				</LoginForm>
			</Container>
		</LoginStyled>
	);
};

export default Login;
