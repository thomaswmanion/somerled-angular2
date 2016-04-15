import {Injectable} from 'angular2/core';
import {Dog} from './dog';

@Injectable()
export class DogService {
	currentDogs: Array<Dog>;
	retiredDogs: Array<Dog>;

	constructor() {
		this.currentDogs = [
			new Dog('Belle', "Somerled's Debutante", require('../images/belle/belle-main.png')),
			new Dog('Leo', "Besame's Lionheart at Somerled", require('../images/leo/leo-main.jpg')),
			new Dog('Mia', "Besame Mi Amor De Somerled", require('../images/mia/mia-main.jpg')),
			new Dog('Summer', "Raisin Salt Water Taffy", require('../images/summer/summer-main.jpg'))
		];

		this.retiredDogs = [
			new Dog('Flash', "GCh Raisin's Jr High Crush", require('../images/flash/flash-main.jpg'))
		];
	}

	findDog(name): Dog {
		let allDogs = this.currentDogs.concat(this.retiredDogs);
		var foundDog = null;;
		allDogs.forEach(dog => {
			var dogsNameCleaned = this.cleanName(dog.callName);
			if (dogsNameCleaned === name) {
				foundDog = dog;
			}
		});
		return foundDog;
	}

	cleanName(name) {
		return name.toLowerCase().replace(/\s/g, '-');
	}
}