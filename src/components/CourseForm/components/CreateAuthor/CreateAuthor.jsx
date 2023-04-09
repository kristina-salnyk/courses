import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Input } from '../../../../common/Input';
import { Button } from '../../../../common/Button';
import { Loader } from '../../../../common/Loader';
import { selectAuthors } from '../../../../store/authors/selectors';
import { fetchAddAuthor } from '../../../../store/authors/thunk';
import {
	ADD_NEW_AUTHOR_ERROR_TEXT,
	AUTHOR_NAME_INPUT,
	CREATE_AUTHOR_BTN,
	GROUP_TITLES,
} from '../../../../constants';

import {
	CourseDetailsGroup,
	CourseDetailsGroupTitle,
} from '../../CourseForm.styled';

const CreateAuthor = () => {
	const dispatch = useDispatch();

	const [authorName, setAuthorName] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const authors = useSelector(selectAuthors);

	const addNewAuthor = async () => {
		const name = authorName.trim();
		if (!name) return;

		if (authors.find((item) => item.name === name)) {
			toast.error(ADD_NEW_AUTHOR_ERROR_TEXT);
			return;
		}

		const result = await dispatch(fetchAddAuthor({ name }, setIsLoading));
		if (result.successful) setAuthorName('');
	};

	return (
		<CourseDetailsGroup>
			{isLoading && <Loader width='50' />}
			<CourseDetailsGroupTitle>
				{GROUP_TITLES.ADD_AUTHOR}
			</CourseDetailsGroupTitle>
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
				onClick={addNewAuthor}
			/>
		</CourseDetailsGroup>
	);
};

export default CreateAuthor;
