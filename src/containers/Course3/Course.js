import React, { Component } from 'react';

import {withRouter} from 'react-router-dom';
	
	
	let QUERY_PARAM = [];

class Course extends Component {

	state = {
		title: null,
		ID: null,
	}


	searchQuery(){
        const query = new URLSearchParams(this.props.location.search);
        const title = query.get('courseTitle');
        const courseId = query.get('courseId');
        if (this.state.title != title){
        	this.setState({title: title});
        }
        if (this.state.ID != courseId){
        	this.setState({ID: courseId});
        }
        console.log(title);
        console.log(courseId);
        //console.log(query.entries());
        // for (let param of query.entries()) {
        //     console.log(param); // yields ['start', '5']
        //     QUERY_PARAM.push(param[0],param[1]);

        // }
        // console.log(QUERY_PARAM);


    }

    componentDidMount(){
        this.searchQuery();
    }

    componentDidUpdate(){
        this.searchQuery();

	}

    render () {
    	console.log(this.props);
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.ID}</p>
            </div>
        );
    }
}

export default Course;//withRouter(Course);