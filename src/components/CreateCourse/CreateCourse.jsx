import React, { useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { Container } from '../../common/Container';
import { TextArea } from '../../common/TextArea';
import { Button } from '../../common/Button';
import { Input } from '../../common/Input';
import { ValidationMessage } from '../../common/ValidationMessage';
import { CreateAuthor } from './components/CreateAuthor';
import { Authors } from './components/Authors';
import { useAuthors } from '../../contexts/AuthorsContext';
import { useCourses } from '../../contexts/CoursesContext';
import useValidationErrors from '../../hooks/useValidationErrors';
import formKeyPressHandler from '../../helpers/handlers/formKeyPressHandler';
import pipeDuration from '../../helpers/pipeDuration';
import dateGenerator from '../../helpers/dateGenerator';
import courseSchema from '../../helpers/schemas/courseSchema';
import {
	AUTHORS_INFO_TEXT,
	AUTHORS_LIST_NAME,
	CARD_TITLES,
	CREATE_COURSE_BTN,
	DELETE_AUTHOR_BTN,
	DESCRIPTION_TEXT_AREA,
	DURATION_INPUT,
	DURATION_UNITS,
	GROUP_TITLES,
	ROUTES,
	SUBMIT_VALIDATION_ERROR_TEXT,
	TITLE_INPUT,
} from '../../constants';

import {
	Author,
	AuthorsList,
	AuthorsMessage,
	CourseDetails,
	CourseDetailsGroup,
	CourseDetailsGroupTitle,
	CourseDuration,
	CreateCourseForm,
	CreateCourseFormHeader,
	CreateCourseStyled,
	Duration,
	FieldWrap,
	FieldWrapStyled,
} from './CreateCourse.styled';

const CreateCourse = () => {
	const navigate = useNavigate();
	const { getAuthorsById } = useAuthors();
	const { setCourses } = useCourses();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [duration, setDuration] = useState(0);

	const { validationErrors, validateOneField, validateAllFields } =
		useValidationErrors();

	const formSubmitHandler = async (event) => {
		event.preventDefault();

		const course = {
			id: uuid(),
			title,
			description,
			authors: courseAuthors,
			duration,
			creationDate: dateGenerator(),
		};

		const isValid = await validateAllFields(courseSchema, course);

		if (isValid) {
			setCourses((prevState) => [course, ...prevState]);
			navigate(ROUTES.COURSES);
			return;
		}

		toast.error(SUBMIT_VALIDATION_ERROR_TEXT);
	};

	const addToAuthors = useCallback(
		(authorId) => {
			setCourseAuthors((prevState) => {
				const state = [authorId, ...prevState];
				validateOneField(courseSchema, AUTHORS_LIST_NAME, state);
				return state;
			});
		},
		[validateOneField]
	);

	const deleteFromAuthors = useCallback(
		(authorId) => {
			setCourseAuthors((prevState) => {
				const state = prevState.filter((item) => item !== authorId);
				validateOneField(courseSchema, AUTHORS_LIST_NAME, state);
				return state;
			});
		},
		[validateOneField]
	);

	const courseAuthorsList = getAuthorsById(courseAuthors);

	return (
		<CreateCourseStyled>
			<Container>
				<CreateCourseForm
					onSubmit={formSubmitHandler}
					onKeyPress={formKeyPressHandler}
				>
					<CreateCourseFormHeader>
						<FieldWrapStyled>
							<Input
								label={TITLE_INPUT.label}
								required={true}
								type={TITLE_INPUT.type}
								value={title}
								error={Boolean(validationErrors[TITLE_INPUT.name])}
								placeholder={TITLE_INPUT.placeholder}
								onChange={(event) => {
									setTitle(event.target.value);
									validateOneField(
										courseSchema,
										TITLE_INPUT.name,
										event.target.value
									);
								}}
							/>
							{validationErrors[TITLE_INPUT.name] && (
								<ValidationMessage
									message={validationErrors[TITLE_INPUT.name]}
								/>
							)}
						</FieldWrapStyled>
						<Button
							type={CREATE_COURSE_BTN.type}
							text={CREATE_COURSE_BTN.text}
						/>
					</CreateCourseFormHeader>
					<FieldWrap>
						<TextArea
							label={DESCRIPTION_TEXT_AREA.label}
							required={true}
							rows={DESCRIPTION_TEXT_AREA.rows}
							value={description}
							error={Boolean(validationErrors[DESCRIPTION_TEXT_AREA.name])}
							placeholder={DESCRIPTION_TEXT_AREA.placeholder}
							onChange={(event) => {
								setDescription(event.target.value);
								validateOneField(
									courseSchema,
									DESCRIPTION_TEXT_AREA.name,
									event.target.value
								);
							}}
						/>
						{validationErrors[DESCRIPTION_TEXT_AREA.name] && (
							<ValidationMessage
								message={validationErrors[DESCRIPTION_TEXT_AREA.name]}
							/>
						)}
					</FieldWrap>
					<CourseDetails>
						<CreateAuthor />
						<Authors
							selectedAuthors={courseAuthors}
							addToAuthors={addToAuthors}
						/>
						<CourseDuration>
							<CourseDetailsGroupTitle>
								{GROUP_TITLES.DURATION}
							</CourseDetailsGroupTitle>
							<FieldWrap>
								<Input
									label={DURATION_INPUT.label}
									required={true}
									type={DURATION_INPUT.type}
									value={duration || ''}
									min={DURATION_INPUT.min}
									error={Boolean(validationErrors[DURATION_INPUT.name])}
									placeholder={DURATION_INPUT.placeholder}
									onChange={(event) => {
										setDuration(Number(event.target.value));
										validateOneField(
											courseSchema,
											DURATION_INPUT.name,
											Number(event.target.value)
										);
									}}
								/>
								{validationErrors[DURATION_INPUT.name] && (
									<ValidationMessage
										message={validationErrors[DURATION_INPUT.name]}
									/>
								)}
							</FieldWrap>
							<p>
								{CARD_TITLES.DURATION}{' '}
								<Duration>{pipeDuration(duration)}</Duration> {DURATION_UNITS}
							</p>
						</CourseDuration>
						<CourseDetailsGroup>
							<CourseDetailsGroupTitle>
								{GROUP_TITLES.COURSE_AUTHORS}
							</CourseDetailsGroupTitle>
							<FieldWrap>
								{courseAuthorsList.length > 0 ? (
									<AuthorsList>
										{courseAuthorsList.map((item) => (
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
									</AuthorsList>
								) : (
									<AuthorsMessage>{AUTHORS_INFO_TEXT}</AuthorsMessage>
								)}
								{validationErrors[AUTHORS_LIST_NAME] && (
									<ValidationMessage
										message={validationErrors[AUTHORS_LIST_NAME]}
									/>
								)}
							</FieldWrap>
						</CourseDetailsGroup>
					</CourseDetails>
				</CreateCourseForm>
			</Container>
		</CreateCourseStyled>
	);
};

export default CreateCourse;
