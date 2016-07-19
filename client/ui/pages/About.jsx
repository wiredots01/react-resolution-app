import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'



export default class About extends Component {
	setVar(){
		Session.set('test', 'hello');
	}

	render() {
		return(
			<ReactCSSTransitionGroup
				component="div"
				transitionName="route"
				transitionEnterTimeout={600}
				transitionLeaveTimeout={400}
				transitionAppearTimeout={600}
				transitionAppear={true} >

				<h1>About Us</h1>
				<button onClick={this.setVar}>click Me</button>
			</ReactCSSTransitionGroup>
		);
	}
}