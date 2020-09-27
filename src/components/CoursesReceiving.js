import React from "react";
import CoursesReceivingDetails from "./CoursesReceivingDetails"

/**
 * Courses Receiving should be a list where it displays the courses you
 * are being tutored in.
 * 
 * @param {*} props 
 */

function CoursesReceiving(props) {

    const tutoringSent =  props.userTutorRequestSent;
    console.log(tutoringSent);

    return (
        <div className="bottom-profile-components">
            <h3>Courses Receiving</h3>
            {tutoringSent && tutoringSent.map(tutoringSentItem => (
                <CoursesReceivingDetails 
                    key={tutoringSentItem.id}
                    tutoringSentID={tutoringSentItem.id}
                />
            ))}
        </div>
    )
}

export default CoursesReceiving;
