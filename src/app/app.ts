/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';

import {Api} from './services/api/api';
import {Home} from './components/home/home';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app', // <app></app>
    providers: [...FORM_PROVIDERS, Api],
    directives: [...ROUTER_DIRECTIVES],
    styles: [require('./app.scss')],
    template: `
    <header>
        <h1 class="title">Hello from {{api.title}} !</h1>
        <nav>
            <a [routerLink]=" ['Home'] ">Home</a>
        </nav>
    </header>
    <main>
        <router-outlet></router-outlet>
    </main>
    <footer x-large>
        WebPack Angular 2 Starter
    </footer>
  `
})
@RouteConfig([
    {path: '/', component: Home, name: 'Home'}
])
export class App {
    url: string = 'https://myapp.com';

    constructor(public api: Api) {
    }
}
