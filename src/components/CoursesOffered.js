import React from "react";

/** TODO:
 * Course ID must be changed to reflect the name of the course */
function listCourse(course) {
    return (
        <p>ID: {course.id}, Grade: {course.grade}</p>
    );
}

function CoursesOffered(props) {
    
    const {myCourses} = props;
    return (
        <div className="bottom-profile-components">
            <h3>Courses Offered</h3>
            {myCourses && myCourses.map(course => listCourse(course))}
        </div>
    );
}

export default CoursesOffered;