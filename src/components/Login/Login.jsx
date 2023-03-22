import React, { useState } from 'react';

import { Container } from '../../common/Container';
import { Input } from '../../common/Input';
import { ValidationMessage } from '../../common/ValidationMessage';
import loginSchema from '../../helpers/schemas/loginSchema';
import {
	EMAIL_INPUT,
	LOGIN_BTN,
	LOGIN_INFO_TEXT,
	PASSWORD_INPUT,
	REGISTER_BTN,
	ROUTES,
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

	const formSubmitHandler = (event) => {
		event.preventDefault();
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
