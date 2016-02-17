import {
  it,
  describe,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';

import {About} from './about';

describe('About Component', () => {

  beforeEachProviders(() => []);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(About).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
