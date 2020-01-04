import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import clsx from 'clsx';
import LazyLoad from 'react-lazyload';
// import useStyles from './App.style';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';
import LandingPage from './pages/LandingPage';
// import Invited from './pages/admin/invited';
// import Register from './pages/register-attendees';

function App(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/invite/:name"
            component={ (props) => <LandingPage {...props} /> }
          />
          {/* <Route
            exact
            path="/admin/:password"
            component={ (props) => <Invited {...props} /> }
          />
          <Route
            exact
            path="/register"
            component= { (props) => <Register {...props} /> }
          /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
