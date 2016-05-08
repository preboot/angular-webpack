import {
  it,
  describe,
  async,
  inject,
  beforeEachProviders
} from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/compiler/testing';

import { AboutComponent } from './about.component';

describe('About Component', () => {

  beforeEachProviders(() => []);

  it('should ...', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(AboutComponent).then((fixture) => {
      fixture.detectChanges();
    });
  })));

});
