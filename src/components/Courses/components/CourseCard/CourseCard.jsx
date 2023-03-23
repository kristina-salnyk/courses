import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

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
	CourseInfo,
	CourseInfoTitle,
	CourseInfoWrap,
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
	const location = useLocation();
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
				<NavLinkStyled
					path={ROUTES.COURSE_INFO.replaceAll(':courseId', id)}
					text={SHOW_COURSE_BTN.text}
					state={{ from: location }}
				/>
			</CourseInfoWrap>
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
