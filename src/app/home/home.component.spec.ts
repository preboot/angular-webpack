import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { HomeComponent } from './home.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([HomeComponent]);
  });

  it('should log ngOnInit', inject([HomeComponent], (home) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    home.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Hello Home');
  }));

});
