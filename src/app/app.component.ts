import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';
import {Response} from '@angular/http';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private api: ApiService) {
    // Do something with api
    api.getSomeAddress().subscribe(
      (res: Response) => {
        console.log(`got the api response: ${res}`);
      },
      (err: Error) => {
        console.log(`got the api error: ${err}`);
      }
    );
  }
}
