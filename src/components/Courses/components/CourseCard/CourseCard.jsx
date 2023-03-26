import React from 'react';
import PropTypes from 'prop-types';

import { LimitedLine } from '../../../../common/LimitedLine';
import { useAuthors } from '../../../../contexts/AuthorsContext';
import pipeDuration from '../../../../helpers/pipeDuration';
import {
	CARD_TITLES,
	DURATION_UNITS,
	ROUTES,
	SHOW_COURSE_BTN,
} from '../../../../constants';

import {
	CourseCardStyled,
	CourseDetails,
	CourseDetailsTitle,
	CourseDetailsWrap,
	CourseTitle,
	NavLinkStyled,
} from './CourseCard.styled';

const CourseCard = ({
	id,
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
			<CourseDetailsWrap>
				<CourseDetails>
					<CourseDetailsTitle>{CARD_TITLES.COURSE_AUTHORS}</CourseDetailsTitle>
					<LimitedLine>
						<span title={courseAuthorsList}>{courseAuthorsList}</span>
					</LimitedLine>
					<CourseDetailsTitle>{CARD_TITLES.DURATION}</CourseDetailsTitle>
					<span>
						{pipeDuration(duration)} {DURATION_UNITS}
					</span>
					<CourseDetailsTitle>{CARD_TITLES.CREATED}</CourseDetailsTitle>
					<span>{creationDate.replaceAll('/', '.')}</span>
				</CourseDetails>
				<NavLinkStyled
					path={ROUTES.COURSE_INFO.replaceAll(':courseId', id)}
					text={SHOW_COURSE_BTN.text}
				/>
			</CourseDetailsWrap>
		</CourseCardStyled>
	);
};

export default CourseCard;

CourseCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	duration: PropTypes.number.isRequired,
	creationDate: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	authors: PropTypes.array.isRequired,
};
