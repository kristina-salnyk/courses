import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../../../common/Button';
import { LimitedLine } from '../../../../common/LimitedLine';
import { useAuthors } from '../../../../contexts/AuthorsContext';
import pipeDuration from '../../../../helpers/pipeDuration';
import {
	CARD_TITLES,
	DURATION_UNITS,
	SHOW_COURSE_BTN,
} from '../../../../constants';

import {
	CourseCardStyled,
	CourseInfo,
	CourseInfoTitle,
	CourseInfoWrap,
	CourseTitle,
} from './CourseCard.styled';

const CourseCard = ({
	title,
	duration,
	creationDate,
	description,
	authors,
}) => {
	const { getAuthorsListById } = useAuthors();

	const courseAuthorsList = getAuthorsListById(authors);

	return (
		<CourseCardStyled>
			<div>
				<CourseTitle>{title}</CourseTitle>
				<p>{description}</p>
			</div>
			<CourseInfoWrap>
				<CourseInfo>
					<CourseInfoTitle>{CARD_TITLES.COURSE_AUTHORS}</CourseInfoTitle>
					<LimitedLine>
						<span title={courseAuthorsList}>{courseAuthorsList}</span>
					</LimitedLine>
					<CourseInfoTitle>{CARD_TITLES.DURATION}</CourseInfoTitle>
					<span>
						{pipeDuration(duration)} {DURATION_UNITS}
					</span>
					<CourseInfoTitle>{CARD_TITLES.CREATED}</CourseInfoTitle>
					<span>{creationDate.replaceAll('/', '.')}</span>
				</CourseInfo>
				<Button type={SHOW_COURSE_BTN.type} text={SHOW_COURSE_BTN.text} />
			</CourseInfoWrap>
		</CourseCardStyled>
	);
};

export default CourseCard;

CourseCard.propTypes = {
	title: PropTypes.string.isRequired,
	duration: PropTypes.number.isRequired,
	creationDate: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	authors: PropTypes.array.isRequired,
};
