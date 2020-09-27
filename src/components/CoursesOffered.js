import React from "react";
import { useHistory } from "react-router-dom";

/** TODO:
 * Course ID must be changed to reflect the name of the course */

function listCourse(course) {
	return (
		<p key={course.id}>
			ID: {course.id}, Grade: {course.grade}
		</p>
	);
}

function CoursesOffered(props) {
    const { myCourses } = props;
    const history = useHistory();


    const handleClick = (e) => {
        e.preventDefault();
        history.push("/add-course", { from: 'teacher' });
    };


    return (
        <div className="bottom-profile-components">
            <h3>Courses Offered</h3>
            <div class="card-body d-flex flex-column">
                {myCourses && myCourses.map(course => listCourse(course))}
                <button onClick={handleClick} class="btn btn-primary text-white mt-auto">Add Course</button>
            </div>
        </div>
    );
}
export default CoursesOffered;
