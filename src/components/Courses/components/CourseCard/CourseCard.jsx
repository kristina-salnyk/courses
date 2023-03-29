import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin6Fill, RiEdit2Fill } from 'react-icons/ri';

import { LimitedLine } from '../../../../common/LimitedLine';
import { Button } from '../../../../common/Button';
import { Icon } from '../../../../common/Icon';
import { useAuthors } from '../../../../contexts/AuthorsContext';
import pipeDuration from '../../../../helpers/pipeDuration';
import {
	CARD_TITLES,
	DELETE_COURSE_BTN,
	DURATION_UNITS,
	ROUTES,
	SHOW_COURSE_BTN,
	UPDATE_COURSE_BTN,
} from '../../../../constants';

import {
	CourseCardButtons,
	CourseCardStyled,
	CourseDetails,
	CourseDetailsTitle,
	CourseDetailsWrap,
	CourseTitle,
} from './CourseCard.styled';

const CourseCard = ({
	id,
	title,
	duration,
	creationDate,
	description,
	authors,
}) => {
	const navigate = useNavigate();
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
				<CourseCardButtons>
					<Button
						type={SHOW_COURSE_BTN.type}
						text={SHOW_COURSE_BTN.text}
						onClick={() =>
							navigate(ROUTES.COURSE_INFO.replaceAll(':courseId', id))
						}
					/>
					<Button
						type={UPDATE_COURSE_BTN.type}
						icon={<Icon component={RiEdit2Fill} size={16} />}
					/>
					<Button
						type={DELETE_COURSE_BTN.type}
						icon={<Icon component={RiDeleteBin6Fill} size={16} />}
						onClick={() => {}}
					/>
				</CourseCardButtons>
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
