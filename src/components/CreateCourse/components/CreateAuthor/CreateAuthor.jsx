import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Input } from '../../../../common/Input';
import { Button } from '../../../../common/Button';
import { selectAuthors } from '../../../../store/authors/selectors';
import { addAuthor } from '../../../../store/authors/actionCreators';
import {
	ADD_NEW_AUTHOR_ERROR_TEXT,
	AUTHOR_NAME_INPUT,
	CREATE_AUTHOR_BTN,
	GROUP_TITLES,
} from '../../../../constants';

import {
	CourseDetailsGroup,
	CourseDetailsGroupTitle,
} from '../../CreateCourse.styled';

const CreateAuthor = () => {
	const dispatch = useDispatch();
	const [authorName, setAuthorName] = useState('');
	const authors = useSelector(selectAuthors);

	const addNewAuthor = () => {
		const name = authorName.trim();
		if (!name) return;

		if (authors.find((item) => item.name === name)) {
			toast.error(ADD_NEW_AUTHOR_ERROR_TEXT);
			return;
		}

		dispatch(addAuthor({ name }));
		setAuthorName('');
	};

	return (
		<CourseDetailsGroup>
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
