import React from "react";
import { useHistory } from "react-router-dom";
import CourseOffDetails from "./CourseOffDetails";

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

                {myCourses && myCourses.map( courseContent => (
                    <CourseOffDetails
                        key={courseContent.id}
                        courseID={courseContent.id}
                    />
                ))}
                <button onClick={handleClick} class="btn btn-primary text-white mt-auto">Add Course</button>
            </div>
        </div>
    );
}
export default CoursesOffered;
