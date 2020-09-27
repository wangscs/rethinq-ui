import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { API_ENDPOINT } from '../constants';

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


    myCourses && myCourses.map(_course => {
        fetch(`${API_ENDPOINT}/tutor-course/${_course.id}/details`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('course names')
                    courseNames.push(result.name)
                    console.log(courseNames)
                },
                (error) => {
                    console.log(error)
                }
            )
    })


    console.log('returning');
    return (
        <div className="bottom-profile-components">
            <h3>Courses Offered</h3>
            <div class="card-body d-flex flex-column">
                {myCourses && myCourses.map((course, i) => listCourse(course, i))}
                <button onClick={handleClick} class="btn btn-outline-dark">Add Course</button>
            </div>
        </div>
    );
}
export default CoursesOffered;