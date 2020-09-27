import React from "react";

/** This be hard coded, make it pull from db */
const nowTakingDatabase = [
    {
        key: 1,
        courseCode: "MAD",
        courseNumber: "101",
        courseName: "Discrete Structures",
    },
    {
        key: 2,
        courseCode: "CIS",
        courseNumber: "4802",
        courseName: "Computer Archetetchie",
    },
    {
        key: 3,
        courseCode: "COT",
        courseNumber: "2833",
        courseName: "Programming II",
    },
];

/**
 * Courses Receiving should be a list where it displays the courses you
 * are being tutored in.
 * 
 * @param {*} props 
 */
function createNowTaking(props) {
    return (
        <p>{props.courseCode}{props.courseNumber} - {props.courseName}</p>
    );
}


function NowTaking() {

    return (
        <div className="bottom-profile-components">
            <h3>Courses Receiving</h3>
            {nowTakingDatabase.map(createNowTaking)}
        </div>
    )

}

export default NowTaking;
