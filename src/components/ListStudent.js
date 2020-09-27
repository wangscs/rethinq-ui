import React from "react";

function listRow(student) {
    return (
        <tr>
            <td>{student.id}, {student.grade}</td>
        </tr>
    );
}

function ListStudent(props) {
    
    const {theStudent} = props;

    return (
        <div>
            {theStudent && theStudent.map(student => listRow(student))}
        </div>
    );
}

export default ListStudent;