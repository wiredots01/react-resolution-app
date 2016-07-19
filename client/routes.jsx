import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import ResolutionMain from './ui/resolutions/ResolutionMain.jsx';
import ResolutionDetails from './ui/resolutions/ResolutionDetails.jsx';
import About from './ui/pages/About.jsx';

FlowRouter.route('/', {
	action(){
		mount(MainLayout, {
			content: (<ResolutionMain />)
		})
	}
});

FlowRouter.route('/about', {
	action(){
		mount(MainLayout, {
			content: (<About />)
		})
	}
});

FlowRouter.route('/resolutions/:id', {
	action(params){
		mount(MainLayout, {
			content: (<ResolutionDetails id={params.id} />)
		})
	}
});