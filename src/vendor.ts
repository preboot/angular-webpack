// Polyfills
// fixes for non ES6 browsers (IE, safari, ...)
import 'es6-shim/es6-shim.js';
// todo remove once https://github.com/angular/angular/issues/6501 is fixed.
import './shims/shims_for_IE.js';
import 'angular2/bundles/angular2-polyfills.js';

// Angular 2
import 'angular2/platform/browser';
import 'angular2/platform/common_dom';
import 'angular2/core';
import 'angular2/router';
import 'angular2/http';

// RxJS
import 'rxjs';

// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...
