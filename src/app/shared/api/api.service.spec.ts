import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';

import { ApiService } from './api.service';

describe('Api Service', () => {

  beforeEachProviders(() => [ApiService]);

  it('should ...', inject([ApiService], (api: ApiService) => {
    expect(api.title).toBe('Angular 2');
  }));

});
