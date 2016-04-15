import {Component, Injectable} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {Router} from './router';
import {AppProviders} from './app-providers'
import {Navbar} from './navbar/navbar';
import {Footer} from './footer/footer';
import {enableProdMode} from 'angular2/core';
import {RouterOutlet} from 'angular2/router';
enableProdMode();
var router = new Router();
let providers = new AppProviders().providers;
let template = require('./app.html');

@Component({
	selector: 'my-app',
	template,
	directives: [RouterOutlet, Navbar, Footer],
	providers,
	styles: [require('!!raw!less!./app.less')]
})
@RouteConfig(router.routes)
export class App {

}
