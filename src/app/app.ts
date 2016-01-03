import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {TranslateService, TranslatePipe} from "ng2-translate/ng2-translate";

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
    pipes: [TranslatePipe],
    styles: [require('./app.scss')],
    template: require('./app.html')
})
@RouteConfig([
    {path: '/', component: Home, name: 'Home'},
    {path: '/About', component: About, name: 'About'}
])
export class App {
    url: string = 'https://github.com/ocombe/ng2-webpack';

    constructor(public api: Api, public translate: TranslateService) {
        var userLang = navigator.language.split('-')[0]; // use navigator lang if available
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';

        // this will load translate json files from src/public/i18n
        translate.useStaticFilesLoader();

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use(userLang);
    }
}
