import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
// include for development builds
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
// include for production builds
// import {enableProdMode} from 'angular2/core';

// Example of external lib
import {TranslateService} from "ng2-translate/ng2-translate";

/*
 * App Component
 * our top level component that holds all of our components
 */
import {App} from './app/app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
// enableProdMode() // include for production builds
function main() {
    return bootstrap(App, [
        // These are dependencies of our App
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS,
        TranslateService, // this provider has been defined in bootstrap and will be the same for all components
        ELEMENT_PROBE_PROVIDERS // remove in production
    ])
        .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
