import React from 'react';
import { NavLink} from 'react-router-dom';

import classes from './Nav.module.css';

const Nav = () => (

		<nav className={classes.App}>
          <ul>
            <li><NavLink to='/'>Main</NavLink></li>
            <li><NavLink to='/users'>Users</NavLink></li>
            <li><NavLink to='/courses'>Courses</NavLink></li>
            <li><NavLink to='/course'>Courses2</NavLink></li>
            <li><NavLink to='/coursequery'>Courses3</NavLink></li>
          </ul>
        </nav>
    )

export default Nav;