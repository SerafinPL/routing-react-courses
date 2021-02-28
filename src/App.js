import React, { Component } from 'react';

import {BrowserRouter, Route, NavLink} from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Nav from './containers/Nav/Nav';



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
      </BrowserRouter>
    );
  }
}

export default App;
