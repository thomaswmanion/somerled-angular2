import {Injectable} from 'angular2/core';
import {Dog} from './dog';

@Injectable()
export class DogService {
	boys: Array<Dog>;
	girls: Array<Dog>;

	constructor() {
		this.boys = [
			new Dog('Leo', "Besame's Lionheart at Somerled", require('../images/leo/leo-main.jpg')),
			new Dog('Flash', "BISS GCh Raisin's Jr High Crush", require('../images/flash/flash-main.jpg')),
			new Dog('Strider', "Ch Raisin's Taking it in Stride", require('../images/flash/flash-main.jpg')),
			new Dog('Ready', "Ch Raisin's Ready for Stardom", require('../images/flash/flash-main.jpg')),
			new Dog('Dusty', "Ch Shadowhill's Northern Lights", require('../images/flash/flash-main.jpg')),
			new Dog('Joker', "Ch Blue Heaven's Jokers Wild", require('../images/flash/flash-main.jpg'))
		];

		this.girls = [
			new Dog('Belle', "Somerled's Debutante", require('../images/belle/belle-main.png')),
			new Dog('Mia', "Besame Mi Amor De Somerled", require('../images/mia/mia-main.jpg')),
			new Dog('Summer', "Raisin Salt Water Taffy", require('../images/summer/summer-main.jpg')),
			new Dog('Aura', "Paray's Au Soleil", require('../images/summer/summer-main.jpg')),
			new Dog('Diamond', "Somerled's Brilliant Cut", require('../images/summer/summer-main.jpg'))
		];
	}


	findDog(name): Dog {
		let allDogs = this.boys.concat(this.girls);
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