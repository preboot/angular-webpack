import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'about',
  template: require('./about.html'),
  styles: [require('./about.scss')],
  providers: [],
  directives: [],
  pipes: []
})
export class AboutComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
  }

}
