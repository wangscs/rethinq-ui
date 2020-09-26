import React from 'react';
import Semicircle from '../img/img1.jpg'
import Books from '../img/img2.jpg'
import {Link} from 'react-router-dom';

const Home = () => {
		return (
			<div>
                <div className="home-container d-flex flex-row justify-content-between">
                    <div className="home-content-left">
                        <h1 className="display-1 logo-font" >rethinq</h1>
                        <h1 className="display-4 ">A new way to find your next tutor.</h1>
                        <div className="d-flex flex-column home-button-container">
                            <div className="d-flex flex-row justify-content-around home-button-top-row">
                                <Link to='/login' className='home-button'><button className="btn btn-outline-dark">Log In</button></Link>
                                <Link to='/registration' className='home-button'><button className="btn btn-outline-dark">Register</button></Link>
                            </div>
                            <button className="btn btn-outline-dark">Learn More</button>
                        </div>
                    </div>
                    <div className="home-content-right">
                        <div className='circle-cont'>
						    <img id='semicircle' src={Semicircle} alt='' />
					    </div>
                    </div>
                </div>

                <div className="about-container d-flex flex-row justify-content-between">
                    <div className="about-left">
                        <div className='circle-cont'>
                            <img id='books' src={Books} alt=""/>
                        </div>
                    </div>
                    <div className="about-right">
                        <h1>Rethinq will find you help in seconds</h1>
                        <br/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque voluptates ullam reiciendis consequatur eum maiores quam ipsam dolorem voluptatem alias rem ratione suscipit autem, ea ducimus omnis, incidunt doloremque hic?</p>
                    </div>
                </div>
			</div>
		);
}


export default Home;
