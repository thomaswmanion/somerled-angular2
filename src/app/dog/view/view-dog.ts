declare var $: any;

import {Component, OnInit} from '@angular/core';
import {Route, RouteSegment, OnActivate, Tree, Router} from '@angular/router';

import {Dog} from '../dog';
import {DogService} from '../dog.service';

@Component({
	selector: 'view-dog',
	template: require('./view-dog.html'),
	providers: [DogService],
	styles: [require('!!raw!less!./view-dog.less')]
})
export class ViewDog implements OnInit, OnActivate {
	dog: Dog;
	curImage: string;
	timestamp: number;
	segment: RouteSegment
	constructor(private dogService: DogService, private router: Router) {}

	ngOnInit() {
		var name = this.segment.getParam('name');
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
	
	routerOnActivate(segment: RouteSegment) {
		this.segment = segment;
	}
}
