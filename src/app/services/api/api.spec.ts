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


describe('Api Service', () => {

  beforeEachProviders(() => [Api]);


  it('should ...', inject([Api], (service:Api) => {

  }));

});
