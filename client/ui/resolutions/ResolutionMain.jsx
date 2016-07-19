// import { Meteor } from 'meteor/meteor';

import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Resolutions } from '../../../collections/resolutions.js';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';

export default class ResolutionMain extends TrackerReact(Component) {
	constructor(){
		super();
		this.state = {
			subscription: {
				resolutions: Meteor.subscribe('userResolution')
			}
		}
	}

	componentWillUnmount() {
	    this.state.subscription.resolutions.stop();  
	}

	resolutions(){
		return Resolutions.find().fetch();
	}

	
	render(){
		console.log(this.resolutions());
		let res = this.resolutions();
		if(res.length < 1){
			return (
				<div>
					<h1>My Resoutions</h1>
					<ResolutionsForm />
				</div>
			)
		}

		return(
			<ReactCSSTransitionGroup
				component="div"
				transitionName="route"
				transitionEnterTimeout={600}
				transitionLeaveTimeout={400}
				transitionAppearTimeout={600}
				transitionAppear={true} >
				<h1>My Resoutions - {Session.get('test')}</h1>
				<ResolutionsForm />
				<ReactCSSTransitionGroup
					component="ul"
					className="resolutions" 
					transitionName="resolutionLoad"
					transitionEnterTimeout={600}
					transitionLeaveTimeout={400}

				>
					{res.map(function(resolution, i){
						return <ResolutionSingle resolution={resolution} key={resolution._id}/>
					})}
				</ReactCSSTransitionGroup>
			</ReactCSSTransitionGroup>
		);
	}
}