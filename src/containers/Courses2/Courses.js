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

    courseSelectedHandler = (id) => {
        //this.setState({selectedPostId: id});
        //this.props.history.push({pathname: '/posts/' + id});
        this.props.history.push('/course/' + id);

    }

    render () {
        
        return (
            <div>
                <Nav/>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                // <Link key={course.id} to={{
                                // pathname: '/courses/' + course.id + '/' + course.title
                                                                   
                                //                                 }}>
                                    <article className="Course" onClick={() => this.courseSelectedHandler(course.id)} >
                                        {course.title}
                                    </article>
                                // </Link>
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