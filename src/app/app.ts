import 'es6-shim';
import 'es6-promise';
import 'reflect-metadata';
import '../../node_modules/zone.js/dist/zone.js';

import {Component, Injectable, enableProdMode} from '@angular/core';
import {Routes} from '@angular/router';
import {routes} from './router';
import {AppProviders} from './app-providers'
import {Navbar} from './navbar/navbar';
import {Footer} from './footer/footer';


window.Outlayer = require('../../node_modules/masonry-layout/node_modules/outlayer/outlayer.js');
window.getSize = require('../../node_modules/masonry-layout/node_modules/get-size/get-size.js');

enableProdMode();
let providers = new AppProviders().providers;
let template = require('./app.html');

@Component({
	selector: 'my-app',
	template,
	directives: [Navbar, Footer],
	providers,
	styles: [require('!!raw!less!./app.less')]
})
@Routes(routes)
export class App {

}

//Facebook Initializaiton
var fb:any = window.fb = {};
fb.cbs = [];
fb.getFeed = function(cb) {
	if (fb.initialized) {
		FB.api('somerledshetlandsheepdogs/feed', 'GET', { access_token: '1561362274164382|msWOl_DYDotMoNXNsxHBDHo6qGY', fields: 'created_time,message,picture,full_picture,attachments'}, cb);	
	}
	else {
		fb.cbs.push(cb);
	}
	
};

//Facebook SDK
window.fbAsyncInit = function() {
    FB.init({
        appId: '1561362274164382',
        xfbml: true,
        version: 'v2.5'
    });
    fb.initialized = true;
    var i;
    for (i = 0; i < fb.cbs.length; i++) {
    	var cb = fb.cbs[i];
    	fb.getFeed(cb);
    }
    fb.cbs = [];

};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return; }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));




require('./boot.ts');

