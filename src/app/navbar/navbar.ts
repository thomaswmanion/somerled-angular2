import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'navbar',
	template: require('./navbar.html'),
	styles: [require('!!raw!less!./navbar.less')]
})

export class Navbar {
	showNavItems: boolean = false;
	headerImage: String = require('../images/header.png');

	constructor(private router: Router) {}

	isLocationEqual(loc: string): boolean {
		return window.location.pathname === loc;
	}

	flipShowNavItems() {
		this.showNavItems = !this.showNavItems;
	}

	goTo(loc: string): void {
		this.showNavItems = false;
		this.router.navigate([loc]);
	}
}
