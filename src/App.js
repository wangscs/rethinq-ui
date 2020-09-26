import React from 'react';
import NavBar from "./components/NavBar";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './routes/Home';
import Profile from "./components/Profile";
import Login from './routes/Login'
import Courses from './routes/Courses'
import AOS from 'aos';

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
            <Route exact path='/courses' component={Courses} />
            <Route exact path='/profile' component={Profile} />
          </Switch>
          <Footer />
        </div>
      </Router>
      
    </div>
  );
}

export default App;
