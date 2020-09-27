import React from "react";

function listRow(student) {
    return (
        <tr>
            <td>{student.id}</td>
            <td>{student.bookedStart}</td>
            <td>{student.bookedEnd}</td>
            <td>{student.rating}</td>
        </tr>
    );
}

function ListStudent(props) {
    
    const {myStudent} = props;
    console.log(myStudent);
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Email</th>
                    <th>Next Session</th>
                </tr>
                {myStudent && myStudent.map(student => listRow(student))}
            </table>
        </div>
    );
}

export default ListStudent;