import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Dog} from '../dog/dog';
import {DogService} from '../dog/dog.service';

@Component({
	selector: 'current',
	template: require('./current.html'),
	providers: [DogService]
})

export class Current implements OnInit {
	constructor(private dogService: DogService, private router: Router) {

	}

	ngOnInit() {
	}

	viewMore(dog: Dog) {
		var name = this.dogService.cleanName(dog.callName);
		this.router.navigate(['/ViewDog', { name }]);
	}
}
