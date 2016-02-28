import {
  it,
  fit,
  describe,
  fdescribe,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder,
} from 'angular2/testing';

// to use Translate Service, we need Http, and to test Http we need to mock the backend
import {BaseRequestOptions, Http, Response, ResponseOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {provide} from "angular2/core";

// Load the implementations that should be tested
import {Api} from './services/api/index';
import {App} from './index';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    App,
    Api,
    BaseRequestOptions,
    MockBackend,
    // Provide a mocked (fake) backend for Http
    provide(Http, {
      useFactory: function useFactory(backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    })
  ]);

  it('should have an url', inject([App], (app:App) => {
    expect(app.url).toEqual('https://github.com/ocombe/ng2-webpack');
  }));

  describe('pipes', function() {});

  describe('services', function() {
    require('./services/api/spec');
  });

  describe('subcomponents', function() {
    require('./components/home/spec');
    require('./components/about/spec');
  })

});
