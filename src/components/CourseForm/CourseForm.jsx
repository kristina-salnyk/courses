import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Container } from '../../common/Container';
import { TextArea } from '../../common/TextArea';
import { Button } from '../../common/Button';
import { Input } from '../../common/Input';
import { ValidationMessage } from '../../common/ValidationMessage';
import { CreateAuthor } from './components/CreateAuthor';
import { Authors } from './components/Authors';
import { Loader } from '../../common/Loader';
import { selectAuthorsByIds } from '../../store/authors/selectors';
import {
	fetchAddCourse,
	fetchCourse,
	fetchUpdateCourse,
} from '../../store/courses/thunk';
import { fetchAuthors } from '../../store/authors/thunk';
import useValidationErrors from '../../hooks/useValidationErrors';
import formKeyPressHandler from '../../helpers/handlers/formKeyPressHandler';
import pipeDuration from '../../helpers/pipeDuration';
import courseSchema from '../../helpers/schemas/courseSchema';
import {
	AUTHORS_LIST_NAME,
	AUTHORS_NO_RESULTS_TEXT,
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
	UPDATE_COURSE_BTN,
} from '../../constants';

import {
	Author,
	AuthorsList,
	AuthorsMessage,
	CourseDetails,
	CourseDetailsGroup,
	CourseDetailsGroupTitle,
	CourseDuration,
	CourseFormContent,
	CourseFormHeader,
	CourseFormStyled,
	Duration,
	FieldWrap,
	FieldWrapStyled,
} from './CourseForm.styled';

const CourseForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { courseId } = useParams();
	const { pathname } = useLocation();

	const initDataFetched = useRef(false);
	const courseDataFetched = useRef(false);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [duration, setDuration] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const authors = useSelector((state) =>
		selectAuthorsByIds(state, courseAuthors)
	);

	const { validationErrors, validateOneField, validateAllFields } =
		useValidationErrors();

	useEffect(() => {
		if (initDataFetched.current) return;
		initDataFetched.current = true;

		dispatch(fetchAuthors(setIsLoading));
	}, [dispatch]);

	useEffect(() => {
		if (!courseId || courseDataFetched.current) return;
		courseDataFetched.current = true;

		(async () => {
			const result = await dispatch(fetchCourse(courseId, setIsLoading));
			if (result.successful) {
				setTitle(result.data.title);
				setDescription(result.data.description);
				setCourseAuthors(result.data.authors);
				setDuration(result.data.duration);
			}
		})();
	}, [courseId, dispatch]);

	const formSubmitHandler = async (event) => {
		event.preventDefault();

		const course = {
			title,
			description,
			duration,
			authors: courseAuthors,
		};

		const isValid = await validateAllFields(courseSchema, course);

		if (!isValid) {
			toast.error(SUBMIT_VALIDATION_ERROR_TEXT);
			return;
		}

		let result;
		if (pathname === ROUTES.CREATE_COURSE) {
			result = await dispatch(fetchAddCourse(course, setIsLoading));
		} else {
			result = await dispatch(
				fetchUpdateCourse(courseId, course, setIsLoading)
			);
		}
		if (result.successful) navigate(ROUTES.COURSES);
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

	return (
		<CourseFormStyled>
			<Container>
				<CourseFormContent
					onSubmit={formSubmitHandler}
					onKeyPress={formKeyPressHandler}
				>
					{isLoading && <Loader />}
					<CourseFormHeader>
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
						{pathname === ROUTES.CREATE_COURSE ? (
							<Button
								type={CREATE_COURSE_BTN.type}
								text={CREATE_COURSE_BTN.text}
							/>
						) : (
							<Button
								type={UPDATE_COURSE_BTN.type}
								text={UPDATE_COURSE_BTN.text}
							/>
						)}
					</CourseFormHeader>
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
								{authors.length > 0 ? (
									<AuthorsList>
										{authors.map((item) => (
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
									<AuthorsMessage>{AUTHORS_NO_RESULTS_TEXT}</AuthorsMessage>
								)}
								{validationErrors[AUTHORS_LIST_NAME] && (
									<ValidationMessage
										message={validationErrors[AUTHORS_LIST_NAME]}
									/>
								)}
							</FieldWrap>
						</CourseDetailsGroup>
					</CourseDetails>
				</CourseFormContent>
			</Container>
		</CourseFormStyled>
	);
};

export default CourseForm;
