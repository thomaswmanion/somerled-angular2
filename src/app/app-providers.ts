import {FacebookService} from './facebook/facebook.service';

export class AppProviders {
	public providers: Array<any>

	constructor() {
		this.providers = [
			FacebookService
		];
	}
}