import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Button } from '../../../../common/Button';
import { selectAuthorsWithoutSelected } from '../../../../store/authors/selectors';
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
	const authors = useSelector((state) =>
		selectAuthorsWithoutSelected(state, selectedAuthors)
	);

	return (
		<CourseDetailsGroup>
			<CourseDetailsGroupTitle>{GROUP_TITLES.AUTHORS}</CourseDetailsGroupTitle>
			{authors.length > 0 ? (
				<AuthorsList>
					{authors.map((item) => (
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
