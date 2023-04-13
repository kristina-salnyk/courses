import { addCourseAction, setCoursesAction } from '../courses/actionCreators';
import reducer from '../courses/reducer';
import { MOCKED_COURSES_LIST } from '../../constants';

test('should return the initial state', () => {
	expect(reducer(undefined, { type: undefined })).toEqual([]);
});

test('should handle a course being added and returns new state', () => {
	const prevState = [];

	expect(
		reducer(prevState, addCourseAction({ ...MOCKED_COURSES_LIST[0] }))
	).toEqual([{ ...MOCKED_COURSES_LIST[0] }]);
});

test('should handle a courses being gotten and returns new state', () => {
	const prevState = [];

	expect(
		reducer(prevState, setCoursesAction([...MOCKED_COURSES_LIST]))
	).toEqual([...MOCKED_COURSES_LIST]);
});
