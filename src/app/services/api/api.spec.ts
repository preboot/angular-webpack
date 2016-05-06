import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';

import {Api} from './api';

describe('Api Service', () => {

  beforeEachProviders(() => [Api]);

  it('should ...', inject([Api], (api: Api) => {
    expect(api.title).toBe('Angular 2');
  }));

});
