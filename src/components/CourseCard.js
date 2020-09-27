import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Books from '../img/img2.jpg'
import { useHistory } from "react-router-dom";
import { API_ENDPOINT } from '../constants';
import { UserContext } from "../context/UserContext";

const CourseCard = ({ courseContent, previousPage }) => {

	const options = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ "grade": "A", "hourlyRate": 21 }),
	};


	const { loggedInUser } = useContext(UserContext);
	console.log('the logged in user')
	console.log(loggedInUser)


	const history = useHistory();
	const course = courseContent;
	const previous = previousPage;

	const takeCourse = (course_id) => {
		//take course logic
	};

	const teachCourse = (this_course) => {
		history.push("/teach-course-form", { course: this_course });
		// fetch(`${API_ENDPOINT}/tutor-course/student=` + loggedInUser.id + `/course=` + course_id + `/add`, options)
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		console.log('res');
		// 		console.log(data);
		// 	})
		// 	.catch((err) => console.error(err));
	};

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
						<button onClick={() => teachCourse(course)} class="btn btn-danger text-white">Teach</button> :
						<button onClick={() => takeCourse(course)} class="btn btn-primary text-white">Learn</button>}
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
