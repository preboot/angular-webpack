import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

@Component({
  selector: 'my-home',
  directives: [...FORM_DIRECTIVES],
  pipes: [],
  styles: [require('./home.component.scss')],
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
