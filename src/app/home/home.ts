import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {RouterLink} from 'angular2/router';

@Component({
	selector: 'home',
	template: require('./home.html'),
	//styles: [require('!!raw!sass!./home.scss')],
	directives: [RouterLink]
})
export class Home {
	cover: String = require('../images/cover.jpg')
}
