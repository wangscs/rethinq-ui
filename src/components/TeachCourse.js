import React, { useEffect, useContext, useState } from 'react';
import CourseCard from './CourseCard';
import { API_ENDPOINT } from "../constants";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";


function TeachCourse() {


    const history = useHistory();
    const { loggedInUser } = useContext(UserContext);
    console.log('teach course page')
    console.log(history.location.state.course)

    const [rate, setRate] = useState({
        grade: "A",
        hourlyRate: "",
    });



    const handleChange = (e) => {
        setRate({ ...rate, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(rate);

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(rate),
        };

        fetch(`${API_ENDPOINT}/tutor-course/student=` + loggedInUser.id + `/course=` + history.location.state.course.id + `/add`, options)
            .then((res) => res.json())
            .then((data) => {
                console.log('res');
                console.log(data);
                history.goBack();
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <div className=' pt-5 '>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>Teach a Course</div>

                            <div className='card-body'>
                                <form onSubmit={handleSubmit}>
                                    <div className='form-group row'>
                                        <label
                                            for='email'
                                            className='col-md-4 col-form-label text-md-right'>
                                            Course
										</label>

                                        <div className='col-md-6'>
                                            <input
                                                type='text'
                                                className='form-control'
                                                autofocus
                                                readOnly
                                                value={history.location.state.course.name}
                                            />
                                        </div>
                                    </div>
                                    <div className='form-group row'>
                                        <label
                                            for='collegeYear'
                                            className='col-md-4 col-form-label text-md-right'>
                                            Grade Earned
										</label>
                                        <div className='col-md-6'>
                                            <select
                                                id='grade'
                                                className='form-control'
                                                placeholder='Grade'
                                                onChange={handleChange}>
                                                <option value='A'>A</option>
                                                <option value='A-'>A-</option>
                                                <option value='B+'>B+</option>
                                                <option value='B-'>B-</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='form-group row'>
                                        <label
                                            for='name'
                                            className='col-md-4 col-form-label text-md-right'>
                                            Hourly Rate
										</label>

                                        <div className='col-md-6'>
                                            <input
                                                id='hourlyRate'
                                                type='number'
                                                className='form-control'
                                                required
                                                autofocus
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className='form-group row mb-0'>
                                        <div className='col-md-8 offset-md-4'>
                                            <button
                                                type='submit'
                                                className='btn btn-outline-success float-right'>
                                                Tutor!
											</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeachCourse;