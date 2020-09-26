import React from 'react';

import Semicircle from '../img/img1.jpg';


const Home = (props) => {

		return (
			<div>
                <div className="home-container d-flex flex-row justify-content-between">
                    <div className="home-content-left">
                        <h1 className="display-2">rethinq</h1>
                        <h1 className="display-4">A new way to find your next tutor.</h1>
                        <div className="d-flex flex-column home-button-container">
                            <div className="d-flex flex-row justify-content-around home-button-top-row">
                                <form className="homepage-form" >
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="username" id="username" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" id="password" className="form-control"/>
                                    </div>
                                    <button type="submit" className="btn btn-outline-dark">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="home-content-right">
                        <div className='circle-cont'>
						    <img className='semicircle' src={Semicircle} alt='' />
					    </div>
                    </div>
                </div>
			</div>
		);
}

export default Home;
