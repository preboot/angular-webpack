/**
 * Created by ereztison on 14/11/2016.
 */

import {Injectable} from '@angular/core';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {Request, RequestMethod, Headers, ResponseOptions, Response} from '@angular/http';

export const HEADER_CONTENT_TYPE_JSON = { 'Content-Type': 'application/json' };

@Injectable()
export class MyMockBackend extends MockBackend {

  constructor() {
    super();

    this.connections.subscribe((connection: MockConnection) => {
      let req: Request = connection.request;

      if (req.method === RequestMethod.Get && new RegExp('\/api\/something').test(req.url)) {
        setTimeout(() => {
          connection.mockRespond(new Response(
            new ResponseOptions({
              status: 200,
              headers: new Headers(HEADER_CONTENT_TYPE_JSON),
              body: {
                data: 'it works!'
              }
            })
          ));
        }, 500);
      } else if (req.method === RequestMethod.Get && new RegExp('\/api\/error').test(req.url)) {
        setTimeout(() => {
          connection.mockError(new Error('An error occurred'));
        }, 500);
      }
    });
  }
}
