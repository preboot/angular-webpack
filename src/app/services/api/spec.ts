import {
  it,
  fit,
  describe,
  ddescribe,
  expect,
  inject,
  beforeEachProviders
} from 'angular2/testing';
import {Api} from './index';

describe('Api Service', () => {

  beforeEachProviders(() => [Api]);

  it('should ...', inject([Api], (api:Api) => {
    expect(api.title).toBe('Angular 2');
  }));

});
