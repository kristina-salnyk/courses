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
	AuthorsStyled,
	CourseDetailsGroup,
	GroupTitle,
	InfoMessage,
} from '../../CreateCourse.styled';

const Authors = ({ selectedAuthors = [], addToAuthors }) => {
	const { authors } = useAuthors();

	const authorsList = authors.filter(
		(item) => !selectedAuthors.includes(item.id)
	);

	return (
		<CourseDetailsGroup>
			<GroupTitle>{GROUP_TITLES.AUTHORS}</GroupTitle>
			{authorsList.length > 0 ? (
				<AuthorsStyled>
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
				</AuthorsStyled>
			) : (
				<InfoMessage>{AUTHORS_INFO_TEXT}</InfoMessage>
			)}
		</CourseDetailsGroup>
	);
};

export default Authors;

Authors.propTypes = {
	selectedAuthors: PropTypes.array,
	addToAuthors: PropTypes.func.isRequired,
};
