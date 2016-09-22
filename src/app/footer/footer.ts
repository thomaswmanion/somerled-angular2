import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'footer',
	template: require('./footer.html')
})

export class Footer {
	year: number = new Date().getFullYear();
	constructor(private router: Router) { }

	isLocationEqual(loc: string): boolean {
		return window.location.pathname === loc;
	}

	goTo(loc: string): void {
		this.router.navigate([loc]);
	}
}
