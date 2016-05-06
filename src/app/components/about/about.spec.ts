import {
  it,
  describe,
  injectAsync,
  beforeEachProviders
} from '@angular/core/testing';

import {
  TestComponentBuilder
} from '@angular/compiler/testing';

import {About} from './about';

describe('About Component', () => {

  beforeEachProviders(() => []);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(About).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
