import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {RouterLink} from 'angular2/router';
import {Subject, BehaviorSubject} from "rxjs";
import {FacebookService} from '../facebook/facebook.service';
import {DateFormatPipe} from 'angular2-moment';

@Component({
	selector: 'home',
	template: require('./home.html'),
	pipes: [DateFormatPipe],
	//styles: [require('!!raw!sass!./home.scss')],
	directives: [RouterLink]
})
export class Home {
	cover: String = require('../images/cover.jpg')

	constructor(private facebookService: FacebookService) {
	}
}
