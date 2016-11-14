import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Response} from '@angular/http';

@Injectable()
export class ApiService {
  title = 'Angular 2';

  constructor(private _http: Http) {}

  public getSomeAddress(): Observable<Response> {
    return this._http.get('/api/something');
  }
}
