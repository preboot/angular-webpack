import {Component} from 'angular2/core';


@Component({
    selector: 'about',
    template: require('app/components/about/about.html'),
    styles: [require('app/components/about/about.scss')],
    providers: [],
    directives: [],
    pipes: []
})
export class About {

    constructor() {
        // Do stuff
    }

}
