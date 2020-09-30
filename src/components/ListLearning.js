import React, {useEffect, useState}from "react";
import GrabLearning from "./GrabLearning";



function ListLearning(props) {

    const arrayOfObjRequestSent = props.userTutorRequestsSent;
    console.log(arrayOfObjRequestSent);
    // const arrayOfRequestIDs = arrayOfObjRequestReceived && arrayOfObjRequestReceived.map(tutorRequest => tutorRequest.id);
    // console.log(arrayOfRequestIDs);
    
    return (
        <div>
            <table>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Course</th>
                    <th>Email</th>
                </tr>
                {arrayOfObjRequestSent && arrayOfObjRequestSent.map( tutorSent => (
                    <GrabLearning
                        key={tutorSent.id}
                        tutorSentID={tutorSent.id}
                    />
                ))}
            </table>
        </div>
    );
}

export default ListLearning;