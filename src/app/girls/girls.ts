import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Dog} from '../dog/dog';
import {DogService} from '../dog/dog.service';

@Component({
	selector: 'girls',
	template: require('../dog/view-dogs.html'),
	providers: [DogService]
})

export class Girls implements OnInit {
	dogs: Array<Dog>;

	constructor(private dogService: DogService, private router: Router) {
		this.dogs = dogService.girls;
	}

	ngOnInit() {
	}

	viewMore(dog: Dog) {
		var name = this.dogService.cleanName(dog.callName);
		this.router.navigate(['/ViewDog', { name }]);
	}
}
