import {
  async,
  inject,
  addProviders
} from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/compiler/testing';

import { AboutComponent } from './about.component';

describe('About Component', () => {
  beforeEach(() => {
    addProviders([]);
  });

  it('template should contain <p> with "About Works!" text',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      tcb.createAsync(AboutComponent).then((fixture) => {
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent.toString().trim()).toEqual('About Works!');
      });
  })));

});
