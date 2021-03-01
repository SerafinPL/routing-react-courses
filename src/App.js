import React, { Component } from 'react';

import {BrowserRouter, Route, NavLink} from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Nav from './containers/Nav/Nav';
import Courses2 from './containers/Courses2/Courses';
import Course from './containers/Course/Course';



class App extends Component {
  render () {
    return (
      <BrowserRouter basename='/'> 
      <Route path='/' exact render={() => (
        <div >
          <Nav/>
          <h1>Course little App</h1>
          


        </div>)} />
      <Route path='/users' component={Users}/>
      <Route path='/courses' component={Courses}/>
      <Route path='/course' exact component={Courses2}/>
      <Route path='/course/:id' component={Course}/>
      </BrowserRouter>
    );
  }
}

export default App;
