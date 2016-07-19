// import { Meteor } from 'meteor/meteor';
import { Resolutions } from '../collections/resolutions.js';


Meteor.methods({
	addResolution(resolution){
		check(resolution, String);
		if(!Meteor.userId()){
			throw new Meteor.Error('not authorized')
		}
		Resolutions.insert({
			text: resolution,
			complete: false,
			createdAt: new Date(),
			user: Meteor.userId()
		});
	},

	toggleResolution(resolution){
		check(resolution, Object);
		
		if(Meteor.userId() !== resolution.user){
			throw new Meteor.Error('not authorized')
		}
		console.log("ang id", resolution.id);
		Resolutions.update(resolution._id, {
			$set: {complete: !resolution.complete}
		});
	},

	deleteResolution(resolution){
		check(resolution, Object);

		console.log(Meteor.userId(), resolution.user)
		if(Meteor.userId() !== resolution.user){
			throw new Meteor.Error('not authorized')
		}
		Resolutions.remove(resolution._id);
	}

	
});