declare var $: any;

import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {Dog} from '../dog';
import {DogService} from '../dog.service';

@Component({
	selector: 'view-dog',
	template: require('./view-dog.html'),
	providers: [DogService],
	styles: [require('!!raw!less!./view-dog.less')]
})

export class ViewDog implements OnInit {
	dog: Dog;
	curImage: string;
	timestamp: number;
	constructor(private params: RouteParams, private dogService: DogService, private router: Router) {}

	ngOnInit() {
		var name = this.params.get('name');
		this.dog = this.dogService.findDog(name);
		if (!this.dog) {
			this.router.navigate(['/Home']);
		}
		this.curImage = this.dog.mainImage;
		this.timestamp = +new Date();
	}

	viewImage(img) {
		this.curImage = img;
		$('.ui.basic.modal.' + this.timestamp).modal('show');
	}
}
