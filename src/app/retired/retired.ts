import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Dog} from '../dog/dog';
import {DogService} from '../dog/dog.service';

@Component({
	selector: 'retired',
	template: require('./retired.html'),
	providers: [DogService]
})

export class Retired implements OnInit {
	constructor(private dogService: DogService, private router: Router) {

	}

	ngOnInit() {
	}

	viewMore(dog: Dog) {
		var name = this.dogService.cleanName(dog.callName);
		this.router.navigate(['/ViewDog', { name }]);
	}
}
