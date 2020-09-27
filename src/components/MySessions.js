import React, {useEffect, useState} from "react";
import {API_ENDPOINT} from "../constants";

/** This be hard coded, make it pull from db */
// const myStudentDatabase = [
//     {
//         key: 1,
//         tutorName: "Griffin P",
//         courseCode: "MAD",
//         courseNumber: "101",
//     },
//     {
//         key: 2,
//         tutorName: "Griffin P",
//         courseCode: "CAS",
//         courseNumber: "4802",
//     },
//     {
//         key: 3,
//         tutorName: "Griffin P",
//         courseCode: "COT",
//         courseNumber: "2833",
//     },
//     {
//         key: 4,
//         tutorName: "Griffin P",
//         courseCode: "COT",
//         courseNumber: "2833",
//     },
//     {
//         key: 5,
//         tutorName: "Griffin P",
//         courseCode: "COT",
//         courseNumber: "2833",
//     },
//     {
//         key: 6,
//         tutorName: "Griffin P",
//         courseCode: "COT",
//         courseNumber: "2833",
//     },
//     {
//         key: 7,
//         tutorName: "Griffin P",
//         courseCode: "COT",
//         courseNumber: "2833",
//     },
//     {
//         key: 8,
//         tutorName: "Griffin P",
//         courseCode: "COT",
//         courseNumber: "2833",
//     },
//     {
//         key: 9,
//         tutorName: "Griffin P",
//         courseCode: "COT",
//         courseNumber: "2833",
//     },
// ];

/**
 * My Sessions should be a list of all the tutoring sessions you have made with 
 * another student 
 * 
 * @param {*} props 
 */
function listSession(course) {
    return (
        <p><a href={"/course/"}>
                {course.code}{course.name}
        </a></p>
    );
}

function MySessions() {

    const [course, setCourse] = useState({});
    useEffect(() => {
        const url = `${API_ENDPOINT}/courses/2`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCourse(data))
            .catch(err => console.log(err))
    }, []);
    console.log(course);

    return (
        <div className="bottom-profile-components">
            <h3>My Sessions</h3>
            {/* {course.map(listSession(course => course))} */}
            {/* {course && course.map(course => listSession(course))} */}
        </div>
    )
}

export default MySessions;