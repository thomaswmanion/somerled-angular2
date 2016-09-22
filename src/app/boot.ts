import {HTTP_PROVIDERS} from '@angular/http';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {App} from './app';

bootstrap(App, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);

