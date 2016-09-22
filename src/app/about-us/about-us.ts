import {Component} from '@angular/core';

@Component({
	selector: 'about-us',
	template: require('./about-us.html')
})

export class AboutUs {
	aboutUsBottom: String = require('../images/about-us-bottom.jpg');
}
