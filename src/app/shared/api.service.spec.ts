import { inject, TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('Api Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [ApiService]});
  });

  it('should ...', inject([ApiService], (api) => {
    expect(api.title).toBe('Angular 2');
  }));
});
