import React from 'react';
import axios from 'axios';
import CourseCard from './CourseCard';
import {API_ENDPOINT} from '../constants';


export default class CourseList extends React.Component {
	state = {
		courses: []
	}

	componentDidMount() {
		axios.get(`${API_ENDPOINT}/courses`)
			.then(res => {
				const courses = res.data;
				this.setState({ courses });
			})
	}
	render() {
		return (
			<div class="course-container">
				{this.state.courses.map(courseContent =>
					<CourseCard courseContent={courseContent} />
				)}
			</div>
		)
	}
}