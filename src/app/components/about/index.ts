import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'about',
  template: require('./index.html'),
  styles: [require('./style.scss')],
  providers: [],
  directives: [],
  pipes: []
})
export class About implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
  }

}
