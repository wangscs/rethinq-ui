import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ courseContent }) => {
	const { name, number } = courseContent;
	return (
		<div>
		
			<Link to={`/course/`}>
                <div className="course-card">
					<div className="card-img-container"></div>
					<h2 className="logo-font text-center">{name}</h2>
					<h2 className="logo-font text-center">{number}</h2>
                </div>
			</Link>
		</div>
	);
};

export default CourseCard;
