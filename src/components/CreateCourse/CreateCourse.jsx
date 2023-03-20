import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';

import { Container } from '../../common/Container';
import { TextArea } from '../../common/TextArea';
import { Button } from '../../common/Button';
import { Input } from '../../common/Input';
import { useCurrentView } from '../../contexts/ViewContext';
import { ValidationMessage } from '../../common/ValidationMessage';
import pipeDuration from '../../helpers/pipeDuration';
import dateGenerator from '../../helpers/dateGenerator';
import courseSchema from '../../helpers/schemas/courseSchema';
import {
	ADD_AUTHOR_BTN,
	ADD_NEW_AUTHOR_ERROR_TEXT,
	ADD_NEW_COURSE_ERROR_TEXT,
	AUTHOR_NAME_INPUT,
	AUTHORS_INFO_TEXT,
	AUTHORS_LIST_NAME,
	CARD_TITLES,
	CREATE_AUTHOR_BTN,
	CREATE_COURSE_BTN,
	DELETE_AUTHOR_BTN,
	DESCRIPTION_TEXT_AREA,
	DURATION_INPUT,
	DURATION_UNITS,
	GROUP_TITLES,
	MOCKED_AUTHORS_LIST,
	MOCKED_COURSES_LIST,
	TITLE_INPUT,
	VIEWS,
} from '../../constants';

import {
	Author,
	Authors,
	CourseInfo,
	CourseInfoGroup,
	CourseInfoGroupStyled,
	CreateCourseForm,
	CreateCourseStyled,
	Duration,
	FieldWrap,
	FieldWrapStyled,
	GroupTitle,
	InfoMessage,
	TopGroup,
} from './CreateCourse.styled';

const CreateCourse = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [authors, setAuthors] = useState([]);
	const [duration, setDuration] = useState(0);
	const [authorName, setAuthorName] = useState('');

	const [validationError, setValidationError] = useState([]);

	const { setCurrentView } = useCurrentView();

	const validateField = (name, value) => {
		(async () => {
			try {
				await courseSchema.validateAt(name, { [name]: value });
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

		const course = {
			id: uuid(),
			title,
			description,
			authors,
			duration,
			creationDate: dateGenerator(),
		};

		try {
			await courseSchema.validate(course, {
				abortEarly: false,
			});

			MOCKED_COURSES_LIST.splice(0, 0, course);
			setCurrentView(VIEWS.COURSES);
		} catch (error) {
			setValidationError(Array.from(error.inner));
			toast.error(ADD_NEW_COURSE_ERROR_TEXT);
		}
	};

	const addNewAuthor = () => {
		const name = authorName.trim();
		if (!name) return;

		if (MOCKED_AUTHORS_LIST.find((item) => item.name === name)) {
			toast.error(ADD_NEW_AUTHOR_ERROR_TEXT);
			return;
		}

		const newAuthor = { id: uuid(), name };
		MOCKED_AUTHORS_LIST.splice(0, 0, newAuthor);

		setAuthorName('');
	};

	const addToAuthors = (authorId) => {
		setAuthors((prevState) => {
			const state = [authorId, ...prevState];
			validateField(AUTHORS_LIST_NAME, state);
			return state;
		});
	};

	const deleteFromAuthors = (authorId) => {
		setAuthors((prevState) => {
			const state = prevState.filter((item) => item !== authorId);
			validateField(AUTHORS_LIST_NAME, state);
			return state;
		});
	};

	const getValidationError = (fieldName) =>
		validationError.find((item) => item.path === fieldName)?.message;

	const authorsList = MOCKED_AUTHORS_LIST.filter(
		(item) => !authors.includes(item.id)
	);

	const courseAuthors = MOCKED_AUTHORS_LIST.filter((item) =>
		authors.includes(item.id)
	);

	const titleValidationError = getValidationError(TITLE_INPUT.name);
	const descriptionValidationError = getValidationError(
		DESCRIPTION_TEXT_AREA.name
	);
	const durationValidationError = getValidationError(DURATION_INPUT.name);
	const authorsValidationError = getValidationError(AUTHORS_LIST_NAME);

	return (
		<CreateCourseStyled>
			<Container>
				<CreateCourseForm
					onSubmit={formSubmitHandler}
					onKeyPress={(event) => {
						const key = event.charCode || event.keyCode || 0;
						if (key === 13) {
							event.preventDefault();
						}
					}}
				>
					<TopGroup>
						<FieldWrapStyled>
							<Input
								label={TITLE_INPUT.label}
								required={true}
								type={TITLE_INPUT.type}
								value={title}
								error={Boolean(titleValidationError)}
								placeholder={TITLE_INPUT.placeholder}
								onChange={(event) => {
									setTitle(event.target.value);
									validateField(TITLE_INPUT.name, event.target.value);
								}}
							/>
							{titleValidationError && (
								<ValidationMessage message={titleValidationError} />
							)}
						</FieldWrapStyled>
						<Button
							type={CREATE_COURSE_BTN.type}
							text={CREATE_COURSE_BTN.text}
						/>
					</TopGroup>
					<FieldWrap>
						<TextArea
							label={DESCRIPTION_TEXT_AREA.label}
							required={true}
							rows={DESCRIPTION_TEXT_AREA.rows}
							value={description}
							error={Boolean(descriptionValidationError)}
							placeholder={DESCRIPTION_TEXT_AREA.placeholder}
							onChange={(event) => {
								setDescription(event.target.value);
								validateField(DESCRIPTION_TEXT_AREA.name, event.target.value);
							}}
						/>
						{descriptionValidationError && (
							<ValidationMessage message={descriptionValidationError} />
						)}
					</FieldWrap>
					<CourseInfo>
						<CourseInfoGroup>
							<GroupTitle>{GROUP_TITLES.ADD_AUTHOR}</GroupTitle>
							<Input
								label={AUTHOR_NAME_INPUT.label}
								type={AUTHOR_NAME_INPUT.type}
								value={authorName}
								placeholder={AUTHOR_NAME_INPUT.placeholder}
								onChange={(event) => {
									setAuthorName(event.target.value);
								}}
							/>
							<Button
								type={CREATE_AUTHOR_BTN.type}
								text={CREATE_AUTHOR_BTN.text}
								onClick={() => {
									addNewAuthor();
								}}
							/>
						</CourseInfoGroup>
						<CourseInfoGroup>
							<GroupTitle>{GROUP_TITLES.AUTHORS}</GroupTitle>
							{authorsList.length > 0 ? (
								<Authors>
									{authorsList.map((item) => (
										<Author key={item.id}>
											{item.name}
											<Button
												type={ADD_AUTHOR_BTN.type}
												text={ADD_AUTHOR_BTN.text}
												onClick={() => {
													addToAuthors(item.id);
												}}
											/>
										</Author>
									))}
								</Authors>
							) : (
								<InfoMessage>{AUTHORS_INFO_TEXT}</InfoMessage>
							)}
						</CourseInfoGroup>
						<CourseInfoGroupStyled>
							<GroupTitle>{GROUP_TITLES.DURATION}</GroupTitle>
							<FieldWrap>
								<Input
									label={DURATION_INPUT.label}
									required={true}
									type={DURATION_INPUT.type}
									value={duration || ''}
									min={DURATION_INPUT.min}
									error={Boolean(durationValidationError)}
									placeholder={DURATION_INPUT.placeholder}
									onChange={(event) => {
										setDuration(Number(event.target.value));
										validateField(
											DURATION_INPUT.name,
											Number(event.target.value)
										);
									}}
								/>
								{durationValidationError && (
									<ValidationMessage message={durationValidationError} />
								)}
							</FieldWrap>
							<p>
								{CARD_TITLES.DURATION}{' '}
								<Duration>{pipeDuration(duration)}</Duration> {DURATION_UNITS}
							</p>
						</CourseInfoGroupStyled>
						<CourseInfoGroup>
							<GroupTitle>{GROUP_TITLES.COURSE_AUTHORS}</GroupTitle>
							<FieldWrap>
								{courseAuthors.length > 0 ? (
									<Authors>
										{courseAuthors.map((item) => (
											<Author key={item.id}>
												{item.name}
												<Button
													type={DELETE_AUTHOR_BTN.type}
													text={DELETE_AUTHOR_BTN.text}
													onClick={() => {
														deleteFromAuthors(item.id);
													}}
												/>
											</Author>
										))}
									</Authors>
								) : (
									<InfoMessage>{AUTHORS_INFO_TEXT}</InfoMessage>
								)}
								{authorsValidationError && (
									<ValidationMessage message={authorsValidationError} />
								)}
							</FieldWrap>
						</CourseInfoGroup>
					</CourseInfo>
				</CreateCourseForm>
			</Container>
		</CreateCourseStyled>
	);
};

export default CreateCourse;
