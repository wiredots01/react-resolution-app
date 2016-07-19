import React, {Component} from 'react';
import { Resolutions } from '../../../collections/resolutions.js';

export default class ResolutionsForm extends Component{

	addResolution(event) {
		event.preventDefault();
		let text = this.refs.resolution.value.trim();
		if(text){
			Meteor.call('addResolution', text, (error, data)=>{
				if(error){
					Bert.alert('Please loginb before submit', 'danger', 'fixed-top', 'fa-frown-o');
				}else{
					this.refs.resolution.value = '';
				}
			});
		}
		
		console.log(text);
		
	}

	render() {
		return (
			<form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
				<input 
					type="text" 
					ref="resolution" 
					placeholder="Finish React Meteor Series"
					/>
			</form>
		)
	}
}