import {
  it,
  describe,
  async,
  inject,
  beforeEachProviders
} from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/compiler/testing';

import {About} from './about';

describe('About Component', () => {

  beforeEachProviders(() => []);

  it('should ...', async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    tcb.createAsync(About).then((fixture) => {
      fixture.detectChanges();
    });
  })));

});
