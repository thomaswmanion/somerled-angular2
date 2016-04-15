import {Component} from 'angular2/core';
import {Location, Router} from 'angular2/router';

@Component({
	selector: 'footer',
	template: require('./footer.html')
})

export class Footer {
	year: number = new Date().getFullYear();
	constructor(private location: Location, private router: Router) { }

	isLocationEqual(loc: string): boolean {
		return this.location.path() === loc;
	}

	goTo(loc: string): void {
		this.router.navigate([loc]);
	}
}
