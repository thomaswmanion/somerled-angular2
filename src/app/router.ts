import {RouteConfig} from 'angular2/router';
import {Home} from './home/home';
import {BreedingPhilosophy} from './breeding-philosophy/breeding-philosophy';
import {Current} from './current/current';
import {Retired} from './retired/retired';
import {AboutUs} from './about-us/about-us';
import {ViewDog} from './dog/view/view-dog';

export class Router {
	routes: Array<any>;
	constructor() {
		this.routes = [
			//Default Route
			{ path: '/', name: 'Home', component: Home, useAsDefault: true },

			{ path: '/current', name: 'Current', component: Current },
			{ path: '/retired', name: 'Retired', component: Retired },
			{ path: '/about-us', name: 'AboutUs', component: AboutUs },
			{ path: '/breeding-philosophy', name: 'BreedingPhilosophy', component: BreedingPhilosophy },
			{ path: '/view/:name', name: 'ViewDog', component: ViewDog }
		];
	}
}
