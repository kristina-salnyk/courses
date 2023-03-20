import WebFont from 'webfontloader';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from './components/Header';
import { Courses } from './components/Courses';
import { CreateCourse } from './components/CreateCourse';
import { useCurrentView } from './contexts/ViewContext';
import { VIEWS } from './constants';

function App() {
	const { currentView } = useCurrentView();

	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Noto Sans', 'sans-serif'],
			},
		});
	}, []);

	return (
		<>
			<ToastContainer />
			<Header />
			<main>
				{currentView === VIEWS.COURSES && <Courses />}
				{currentView === VIEWS.CREATE_NEW_COURSE && <CreateCourse />}
			</main>
		</>
	);
}

export default App;
