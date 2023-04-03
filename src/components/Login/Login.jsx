import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../common/Container';
import { Input } from '../../common/Input';
import { ValidationMessage } from '../../common/ValidationMessage';
import { fetchLogin } from '../../store/user/thunk';
import useValidationErrors from '../../hooks/useValidationErrors';
import loginSchema from '../../helpers/schemas/loginSchema';
import {
	EMAIL_INPUT,
	LOGIN_BTN,
	LOGIN_NAVIGATION_TEXT,
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
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

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

		dispatch(fetchLogin(user));
	};

	return (
		<LoginStyled>
			<Container>
				<LoginForm onSubmit={formSubmitHandler}>
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
							{LOGIN_NAVIGATION_TEXT}{' '}
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
