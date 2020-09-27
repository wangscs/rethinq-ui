import React from 'react';
import NavBar from "./components/NavBar";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './routes/Home';
import Profile from "./components/Profile";
import Teaching from "./components/Teaching"
import Login from './routes/Login'
import Courses from './routes/Courses'
import AddCourse from './components/AddCourse'
import AOS from 'aos';
import CourseSessions from './routes/CourseSessions';
import TeachCourse from './components/TeachCourse';

AOS.init();

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/registration' component={Registration} />
            <Route exact path='/teaching' component={Teaching} />
            <Route exact path='/courses' component={Courses} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/course/:courseId/book' component={CourseSessions} />
            <Route exact path='/add-course' component={AddCourse} />
            <Route exact path='/teach-course-form' component={TeachCourse} />
          </Switch>
          <Footer />
        </div>
      </Router>
      
    </div>
  );
}

export default App;
