import reducer from '../courses/reducer';
import { addCourseAction, setCoursesAction } from '../courses/actionCreators';
import { MOCKED_COURSES_LIST } from '../../constants';

test('should return the initial state', () => {
	expect(reducer(undefined, { type: undefined })).toEqual([]);
});

test('should handle COURSES_ADD and returns new state', () => {
	expect(reducer([], addCourseAction({ ...MOCKED_COURSES_LIST[0] }))).toEqual([
		{ ...MOCKED_COURSES_LIST[0] },
	]);
});

test('should handle COURSES_FETCH and returns new state', () => {
	expect(reducer([], setCoursesAction([...MOCKED_COURSES_LIST]))).toEqual([
		...MOCKED_COURSES_LIST,
	]);
});
