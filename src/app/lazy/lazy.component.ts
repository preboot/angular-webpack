import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Lazy');
  }
}
