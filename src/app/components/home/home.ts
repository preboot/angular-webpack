import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Http} from 'angular2/http';

@Component({
    selector: 'home',
    directives: [...FORM_DIRECTIVES],
    pipes: [],
    styles: [require('./home.css')],
    template: require('./home.html')
})
export class Home {
    // TypeScript public modifiers
    constructor(public http: Http) {
    }

    ngOnInit() {
        console.log('hello Home');
    }

}
