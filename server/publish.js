import { Meteor } from 'meteor/meteor';
import { Resolutions } from '../collections/resolutions.js';


Meteor.publish('allResolutions', function(){
	return Resolutions.find();
});

Meteor.publish('userResolution', function(){
	return Resolutions.find({user: this.userId});
});