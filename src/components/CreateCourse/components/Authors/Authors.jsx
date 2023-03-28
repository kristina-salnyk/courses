import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../../../common/Button';
import { useAuthors } from '../../../../contexts/AuthorsContext';
import {
	ADD_AUTHOR_BTN,
	AUTHORS_INFO_TEXT,
	GROUP_TITLES,
} from '../../../../constants';

import {
	Author,
	AuthorsList,
	AuthorsMessage,
	CourseDetailsGroup,
	CourseDetailsGroupTitle,
} from '../../CreateCourse.styled';

const Authors = ({ selectedAuthors = [], addToAuthors }) => {
	const { authors } = useAuthors();

	const authorsList = authors.filter(
		(item) => !selectedAuthors.includes(item.id)
	);

	return (
		<CourseDetailsGroup>
			<CourseDetailsGroupTitle>{GROUP_TITLES.AUTHORS}</CourseDetailsGroupTitle>
			{authorsList.length > 0 ? (
				<AuthorsList>
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
				</AuthorsList>
			) : (
				<AuthorsMessage>{AUTHORS_INFO_TEXT}</AuthorsMessage>
			)}
		</CourseDetailsGroup>
	);
};

export default Authors;

Authors.propTypes = {
	selectedAuthors: PropTypes.array,
	addToAuthors: PropTypes.func.isRequired,
};
