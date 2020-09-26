import React from 'react';
import NavBar from "./NavBar";
import Registration from "./Registration";
import Footer from "./Footer";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from '../Routes/Home';
import Profile from "./Profile";
import Login from '../Routes/Login'
import Courses from '../Routes/Courses.js'
import AuthState from '../Context/AuthContext/AuthState'
import AlertState from '../Context/AlertContext/AlertState'
import CoursesState from '../Context/CoursesContext/CoursesState'
import setAuthToken from '../setAuthTokens'
import AOS from 'aos';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

AOS.init();

function App() {
  return (
    <div className="App">
      <AuthState>
			  <CoursesState>
          <AlertState>
            <Router>
              <NavBar />
              <div className="content">
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/registration' component={Registration} />
                  <Route exact path='/courses' component={Courses} />
                  <Route exact path='/profile' component={Profile} />
                </Switch>
                <Footer />
              </div>
            </Router>
          </AlertState>
        </CoursesState>
		  </AuthState>
      
    </div>
  );
}

export default App;
