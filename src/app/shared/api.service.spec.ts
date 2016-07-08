import {
  inject,
  addProviders
} from '@angular/core/testing';

import { ApiService } from './api.service';

describe('Api Service', () => {
  beforeEach(() => {
    addProviders([ApiService]);
  });

  it('should ...', inject([ApiService], (api: ApiService) => {
    expect(api.title).toBe('Angular 2');
  }));
});
