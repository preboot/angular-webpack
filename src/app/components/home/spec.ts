import {
  it,
  fit,
  inject,
  describe,
  ddescribe,
  beforeEachProviders,
} from 'angular2/testing';

// Load the implementations that should be tested
import {Home} from './index';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    Home
  ]);

  it('should log ngOnInit', inject([Home], (home) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    home.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Hello Home');
  }));

});
