import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import {Link, Route} from 'react-router-dom';
import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }



    render () {
        
        return (
            <div>
                <Nav/>
                <h1>Amazing Udemy Courses1</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                <Link key={course.id} to={{
                                pathname: '/courses/' + course.id + '/' + course.title
                                                                   
                                                                }}>
                                    <article className="Course"  >{course.title}</article>
                                </Link>
                            );
                        } )
                    }
                </section>
                <Route path='/courses/:courseId/:courseTitle'  component={Course} />
            </div>
        );
    }
}

export default Courses;