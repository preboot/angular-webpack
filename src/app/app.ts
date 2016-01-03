import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import '../style/app.scss';

import {Api} from './services/api/api';
import {Home} from './components/home/home';
import {About} from "./components/about/about";

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app', // <app></app>
    providers: [...FORM_PROVIDERS, Api],
    directives: [...ROUTER_DIRECTIVES],
    styles: [require('./app.scss')],
    template: require('./app.html')
})
@RouteConfig([
    {path: '/', component: Home, name: 'Home'},
    {path: '/About', component: About, name: 'About'}
])
export class App {
    url: string = 'https://myapp.com';

    constructor(public api: Api) {
    }
}
