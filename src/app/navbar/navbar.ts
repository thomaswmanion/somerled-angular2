import {Component} from 'angular2/core';
import {Location, Router} from 'angular2/router';

@Component({
	selector: 'navbar',
	template: require('./navbar.html'),
	styles: [require('!!raw!less!./navbar.less')]
})

export class Navbar {
	showNavItems: boolean = false;
	constructor(private location: Location, private router: Router) {}

	isLocationEqual(loc: string): boolean {
		return this.location.path() === loc;
	}

	flipShowNavItems() {
		this.showNavItems = !this.showNavItems;
	}

	goTo(loc: string): void {
		this.showNavItems = false;
		this.router.navigate([loc]);
	}
}
