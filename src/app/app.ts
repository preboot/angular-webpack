import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {FORM_PROVIDERS} from '@angular/common';

import '../style/app.scss';

import {Api} from './services/api/api';
import {HomeComponent} from './components/home/home';
import {AboutComponent} from './components/about/about';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app', // <app></app>
  providers: [...FORM_PROVIDERS, Api],
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('./app.scss')],
  template: require('./app.html')
})
@RouteConfig([
  {path: '/', component: HomeComponent, name: 'Home'},
  {path: '/About', component: AboutComponent, name: 'About'}
])
export class AppComponent {
  url: string = 'https://github.com/preboot/angular2-webpack';

  constructor(public api: Api) {
  }
}
