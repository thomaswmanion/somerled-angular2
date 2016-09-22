import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {Subject, BehaviorSubject} from "rxjs";
import {FacebookService} from '../facebook/facebook.service';

@Component({
	selector: 'home',
	template: require('./home.html'),
	pipes: [],
	//styles: [require('!!raw!sass!./home.scss')]
})
export class Home {
	cover: String = require('../images/cover.jpg')

	constructor(private facebookService: FacebookService) {
	}
}
