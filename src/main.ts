import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
  enableProdMode();
}

bootstrap(AppComponent, [
    // These are dependencies of our App
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS
  ])
  .catch(err => console.error(err));
