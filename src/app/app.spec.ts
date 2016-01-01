import {
    it,
    inject,
    injectAsync,
    beforeEachProviders,
    TestComponentBuilder
} from 'angular2/testing';

// Load the implementations that should be tested
import {Api} from './services/api/api';
import {App} from './app';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    App,
    Api
  ]);

  it('should have an url', inject([ App ], (app) => {
    expect(app.url).toEqual('https://myapp.com');
  }));

});
