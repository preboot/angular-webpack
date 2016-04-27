import {
  it,
  describe,
  async,
  inject,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';

import {About} from './about';

describe('About Component', () => {

  beforeEachProviders(() => []);

  it('should ...', async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    tcb.createAsync(About).then((fixture) => {
      fixture.detectChanges();
    });
  })));

});
