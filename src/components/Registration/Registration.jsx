import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container } from '../../common/Container';
import { Input } from '../../common/Input';
import { Loader } from '../../common/Loader';
import { ValidationMessage } from '../../common/ValidationMessage';
import { fetchRegister } from '../../store/user/thunk';
import useValidationErrors from '../../hooks/useValidationErrors';
import registerSchema from '../../helpers/schemas/registerSchema';
import {
	EMAIL_INPUT,
	LOGIN_BTN,
	NAME_INPUT,
	PASSWORD_INPUT,
	REGISTER_BTN,
	REGISTRATION_NAVIGATE_TEXT,
	ROUTES,
} from '../../constants';

import {
	ButtonStyled,
	FieldWrapStyled,
	LinkStyled,
	RegistrationForm,
	RegistrationFormContent,
	RegistrationFormMessage,
	RegistrationStyled,
} from './Registration.styled';

const Registration = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const { validationErrors, validateOneField, validateAllFields } =
		useValidationErrors();

	const formSubmitHandler = async (event) => {
		event.preventDefault();

		const user = {
			name,
			email,
			password,
		};

		const isValid = await validateAllFields(registerSchema, user);
		if (!isValid) return;

		const result = await dispatch(fetchRegister(user, setIsLoading));
		if (result.successful) navigate(ROUTES.LOGIN);
	};

	return (
		<RegistrationStyled>
			<Container>
				<RegistrationForm onSubmit={formSubmitHandler}>
					{isLoading && <Loader />}
					<RegistrationFormContent>
						<FieldWrapStyled>
							<Input
								label={NAME_INPUT.label}
								type={NAME_INPUT.type}
								value={name}
								error={Boolean(validationErrors[NAME_INPUT.name])}
								placeholder={NAME_INPUT.placeholder}
								onChange={(event) => {
									setName(event.target.value);
									validateOneField(
										registerSchema,
										NAME_INPUT.name,
										event.target.value
									);
								}}
							/>
							{validationErrors[NAME_INPUT.name] && (
								<ValidationMessage
									message={validationErrors[NAME_INPUT.name]}
								/>
							)}
						</FieldWrapStyled>
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
										registerSchema,
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
										registerSchema,
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
						<ButtonStyled type={REGISTER_BTN.type} text={REGISTER_BTN.text} />
						<RegistrationFormMessage>
							{REGISTRATION_NAVIGATE_TEXT}{' '}
							<LinkStyled to={ROUTES.LOGIN}>{LOGIN_BTN.text}</LinkStyled>
						</RegistrationFormMessage>
					</RegistrationFormContent>
				</RegistrationForm>
			</Container>
		</RegistrationStyled>
	);
};

export default Registration;
