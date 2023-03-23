import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuid } from 'uuid';

import { Input } from '../../../../common/Input';
import { Button } from '../../../../common/Button';
import { useAuthors } from '../../../../contexts/AuthorsContext';
import {
	ADD_NEW_AUTHOR_ERROR_TEXT,
	AUTHOR_NAME_INPUT,
	CREATE_AUTHOR_BTN,
	GROUP_TITLES,
} from '../../../../constants';

import { CourseDetailsGroup, GroupTitle } from '../../CreateCourse.styled';

const CreateAuthor = () => {
	const { authors, setAuthors } = useAuthors();

	const [authorName, setAuthorName] = useState('');

	const addNewAuthor = () => {
		const name = authorName.trim();
		if (!name) return;

		if (authors.find((item) => item.name === name)) {
			toast.error(ADD_NEW_AUTHOR_ERROR_TEXT);
			return;
		}

		const author = { id: uuid(), name };
		setAuthors((prevState) => [author, ...prevState]);

		setAuthorName('');
	};

	return (
		<CourseDetailsGroup>
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
				onClick={addNewAuthor}
			/>
		</CourseDetailsGroup>
	);
};

export default CreateAuthor;
