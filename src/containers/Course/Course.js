import React, { Component } from 'react';

import {withRouter} from 'react-router-dom';

class Course extends Component {
    render () {
    	console.log(this.props);
        return (
            <div>
                <h1>{this.props.match.params.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;//withRouter(Course);