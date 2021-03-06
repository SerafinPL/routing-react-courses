import React, { Component } from 'react';

import {BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Nav from './containers/Nav/Nav';
import Courses2 from './containers/Courses2/Courses';
import Courses3 from './containers/Courses3/Courses';
import Course from './containers/Course/Course';
import ErrorSite from './containers/404/404';


class App extends Component {
  render () {
    return (
      <BrowserRouter basename='/'>
        <Switch> 
          <Route path='/' exact render={() => (
            <div >
              <Nav/>
              <h1>Course little App</h1>
              


            </div>)} />

          <Route path='/users' component={Users}/>
          <Route path='/courses' component={Courses}/>
          <Route path='/course' exact component={Courses2}/>
          <Route path='/coursequery'  component={Courses3}/>
          <Route path='/course/:id' component={Course}/>
          <Redirect from='/all-courses' to='/courses'/>
          <Redirect from='/allcourses' to='/courses'/>
          <Route component={ErrorSite} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
