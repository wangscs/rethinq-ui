import React from 'react';
import CourseList from '../components/CourseList'

const Home = () => {
		return (
			<div className="container explore-container">
                <h1 className="text-center display-1 logo-font">Explore Courses</h1>
                <br/>
                <input className="form-control" type="text" placeholder="Search"/>
				<CourseList/>
			</div>
		);
}


export default Home;
