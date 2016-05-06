import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { FORM_PROVIDERS } from '@angular/common';

import { ApiService } from './shared/api';
import { HomeComponent } from './+home';
import { AboutComponent } from './+about';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <app></app>
  providers: [...FORM_PROVIDERS, ApiService],
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('./app.component.scss')],
  template: require('./app.component.html')
})
@RouteConfig([
  {path: '/', component: HomeComponent, name: 'Home'},
  {path: '/About', component: AboutComponent, name: 'About'}
])
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private api: ApiService) {
  }
}
