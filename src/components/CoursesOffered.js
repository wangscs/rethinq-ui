import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { API_ENDPOINT } from '../constants';
import CourseOffDetails from './CourseOffDetails';

let courseNames = [];
/** TODO:
 * Course ID must be changed to reflect the name of the course */

function listCourse(course, i) {
    return (
        <p>ID: {courseNames[i]}, Grade: {course.grade}</p>
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
                <button onClick={handleClick} class="btn btn-outline-primary mt-auto">Add Course</button>

                {myCourses && myCourses.map(courseContent => (
                    <CourseOffDetails
                        key={courseContent.id}
                        courseID={courseContent.id}
                    />
                ))}
            </div>
        </div>
    );
}
export default CoursesOffered;
