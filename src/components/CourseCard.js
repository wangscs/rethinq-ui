import React from "react";
import { Link } from "react-router-dom";
import Books from "../img/img2.jpg";

const CourseCard = ({ courseContent }) => {
	const course = courseContent;
	return (
		<div>
			<Link to={`/course/`}>
				<div class='course-card'>
					<img className='card-img-top' src={Books} alt='Card course cap' />
					<div class='course-card-body'>
						<h5 class='card-title'>{course.name}</h5>
						<p class='card-text'>{course.code}</p>
						<Link
							to={`/course/${course.id}/book`}
							class='btn btn-primary text-white'>
							Book Tutor
						</Link>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CourseCard;
