import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES],
  pipes: [],
  styles: [require('./home.scss')],
  template: require('./home.html')
})
export class Home implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
