import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseCard from './CourseCard';
import { API_ENDPOINT } from "../constants";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";


function AddCourse() {


    const history = useHistory();

    const prevPage = history.location.state.from;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`${API_ENDPOINT}/courses`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('the results')
                    console.log(result)
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (

            <div className="container explore-container">
                <h1 className="text-center display-1 logo-font">Teach a Course</h1>
                <br />
                <input className="form-control" type="text" placeholder="Search" />
                <div class="course-container">
                    {items.map(courseContent =>
                        <CourseCard courseContent={courseContent} previousPage={prevPage} />
                    )}
                </div>
            </div>
        );
    }
}

export default AddCourse;