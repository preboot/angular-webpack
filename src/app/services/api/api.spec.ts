import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {Api} from './api';

import {BrowserDomAdapter} from 'angular2/src/platform/browser/browser_adapter';
BrowserDomAdapter.makeCurrent(); // in the test code


describe('Api Service', () => {

  beforeEachProviders(() => [Api]);


  it('should ...', inject([Api], (service:Api) => {

  }));

});
