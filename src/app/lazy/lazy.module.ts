import { NgModule } from '@angular/core';

import { LazyComponent }   from './lazy.component';
import { lazyRouting } from './lazy.routing';

@NgModule({
  imports: [lazyRouting],
  declarations: [LazyComponent]
})
export class LazyModule {}
