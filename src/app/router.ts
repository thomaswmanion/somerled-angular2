import {RouteConfig} from 'angular2/router';
import {Home} from './home/home';
import {BreedingPhilosophy} from './breeding-philosophy/breeding-philosophy';
import {Boys} from './boys/boys';
import {Girls} from './girls/girls';
import {AboutUs} from './about-us/about-us';
import {ViewDog} from './dog/view/view-dog';

export class Router {
	routes: Array<any>;
	constructor() {
		this.routes = [
			//Default Route
			{ path: '/', name: 'Home', component: Home, useAsDefault: true },

			{ path: '/boys', name: 'Boys', component: Boys },
			{ path: '/girls', name: 'Girls', component: Girls },
			{ path: '/about-us', name: 'AboutUs', component: AboutUs },
			{ path: '/breeding-philosophy', name: 'BreedingPhilosophy', component: BreedingPhilosophy },
			{ path: '/view/:name', name: 'ViewDog', component: ViewDog }
		];
	}
}
