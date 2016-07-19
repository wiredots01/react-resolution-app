import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Resolutions } from '../../../collections/resolutions.js';
import ReactDOM from 'react-dom';



export default class ResolutionDetails extends TrackerReact(Component) {
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

	resolution(){
		return Resolutions.findOne(this.props.id);
	}

	render() {
		let res = this.resolution();
		console.log('res', this.resolution());
		if(!res){
			return (
				<div>
					<h2>loading</h2>
				</div>
			)
		}
		return (
				<div>
					<h2>{res.text}</h2>
				</div>
			)
		
	}
}