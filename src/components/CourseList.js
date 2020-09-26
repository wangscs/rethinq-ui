import React, { useEffect, useState, useContext } from 'react';
import CourseCard from '../components/CourseCard';
import CourseContext from '../Context/CoursesContext/CoursesContext'
import LinearProgress from '@material-ui/core/LinearProgress';

const CourseList = () => {
	// const [ recipes, setRecipes ] = useState({});
	const [ loading ] = useState(false);
	const courseContext = useContext(CourseContext);
	let { courses, getCourses, filtered } = courseContext;

	// Mimics component did mount. Square brackets hold content of what needs to change in order to update
	useEffect(() => {
		// Will load all courses into the context
		
		getCourses();
	}, []);// eslint-disable-line react-hooks/exhaustive-deps

	courses=[{name:"Programming", number:"CIS101"}, {name:"Programming", number:"CIS101"}, {name:"Programming", number:"CIS101"}, {name:"Geography", number:"CIS101"}, {name:"Biology", number:"CIS101"},{name:"Geography", number:"CIS101"}, {name:"Biology", number:"CIS101"},{name:"Geography", number:"CIS101"}, {name:"Biology", number:"CIS101"}, {name:"History", number:"CIS101"}]

	return (
		<div>
			{courses !== [] && !loading ? filtered !== null ? (
				filtered.map((course) => (
					<div className='course-card-container d-flex flex-row'>
						<CourseCard courseContent={course} />
					</div>
				))
			) : (
				<div className='course-card-container d-flex flex-row justify-content-betweeb flex-wrap'>
					{courses.map((course) => <CourseCard courseContent={course} />)}
				</div>
			) : (
				<LinearProgress />
			)}
		</div>
	);
};

export default CourseList;
