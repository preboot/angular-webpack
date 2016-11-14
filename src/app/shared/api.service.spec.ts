import {TestBed, inject, async} from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {XHRBackend, ResponseOptions, Response, Http, HttpModule} from '@angular/http';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';


describe('Api Service', () => {

  let backend: MockBackend;
  let apiService: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ApiService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    }).compileComponents();

    let http = TestBed.get(Http);
    backend = TestBed.get(XHRBackend);
    apiService = new ApiService(http);
  }));


  describe('when get some address', () => {

    it('should succeed', async(inject([], () => {
      backend.connections.subscribe((c: MockConnection) => {
        expect(c.request.url).toBe('/api/something');
        c.mockRespond(new Response(
          new ResponseOptions({ status: 200, body: { data: 'something' } })
        ));
      });

      apiService.getSomeAddress()
        .do((response: Response) => {
          expect(response.json().data).toBe('something');
        })
        .toPromise();
    })));


    it('should fail with server error', async(inject([], () => {
      backend.connections.subscribe((c: MockConnection) => {
        expect(c.request.url).toBe('/api/something');
        c.mockRespond(new Response(
          new ResponseOptions({ status: 500 })
        ));
      });

      apiService.getSomeAddress()
        .do((response: Response) => {
          expect(response.status).toBe(500);
        })
        .toPromise();
    })));


    it('should fail with error', async(inject([], () => {
      backend.connections.subscribe((c: MockConnection) => {
        expect(c.request.url).toBe('/api/something');
        c.mockError(new Error('Some Error'));
      });

      apiService.getSomeAddress()
        .do((response: Response) => {
          expect(true).toBe(false);
        })
        .catch((err: any) => {
          expect(err).toBeDefined();
          return Observable.of({});
        })
        .toPromise();
    })));


    afterEach(() => {
      // make sure all expected calls truly happened
      backend.verifyNoPendingRequests();

      // resolve any not-yet-resolve connections
      backend.resolveAllConnections();
    });
  });
});
