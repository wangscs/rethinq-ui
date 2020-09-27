import React from 'react';
import { Link } from 'react-router-dom';
import Books from '../img/img2.jpg'
import { useHistory } from "react-router-dom";


function teachTheCourse() {
	console.log('teaching the course')
}

function takeTheCourse() {
	console.log('taking the course')
}

const CourseCard = ({ courseContent, previousPage }) => {
    const history = useHistory();
	const course = courseContent;
	const previous = previousPage;

	return (
		<div>

			<div class="course-card">
				<img class="card-img-top" src={Books} alt="Card image cap" />
				<div class="course-card-body">
					<Link to={`/course/`}>
						<h5 class="card-title">{course.name}</h5>
						<p class="card-text">{course.code}</p>
					</Link>
					{previous == 'teacher' ? 
					<button onClick={history.goBack} class="btn btn-danger text-white">Add Course</button> : 
					<button onClick={history.goBack} class="btn btn-primary text-white">Book Tutor</button>}
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
