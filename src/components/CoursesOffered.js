import React from "react";
import { useHistory } from "react-router-dom";

<<<<<<< HEAD
/** TODO:
 * Course ID must be changed to reflect the name of the course */

=======
/** 
 * Courses Offered should list all the courses you are willing to tutor in
 */
>>>>>>> 9061f007c4ce177d9125e89e3783919c1588eb7a
function listCourse(course) {
    return (
        <p>ID: {course.id}, Grade: {course.grade}</p>
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
                <a onClick={handleClick} class="btn btn-primary text-white mt-auto">Add Course</a>
            </div>
        </div>
    );
}
export default CoursesOffered;