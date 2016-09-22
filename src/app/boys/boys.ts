import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Dog} from '../dog/dog';
import {DogService} from '../dog/dog.service';

@Component({
	selector: 'boys',
	template: require('../dog/view-dogs.html'),
	providers: [DogService]
})

export class Boys implements OnInit {
	dogs: Array<Dog>;

	constructor(private dogService: DogService, private router: Router) {
		this.dogs = dogService.boys;
	}

	ngOnInit() {
	}

	viewMore(dog: Dog) {
		var name = this.dogService.cleanName(dog.callName);
		this.router.navigate(['/ViewDog', { name }]);
	}
}
