import {
    it,
    inject,
    injectAsync,
    beforeEachProviders,
    TestComponentBuilder,
} from 'angular2/testing';

import {TranslateService} from "ng2-translate/ng2-translate";
// to use Translate Service, we need Http, and to test Http we need to mock the backend
import {BaseRequestOptions, Http, Response, ResponseOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {provide} from "angular2/core";

// Load the implementations that should be tested
import {Api} from './services/api/api';
import {App} from './app';

describe('App', () => {
    // provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
        App,
        Api,
        BaseRequestOptions,
        MockBackend,
        // Provide a mocked (fake) backend for Http
        provide(Http, {
            useFactory: function useFactory(backend, defaultOptions) {
                return new Http(backend, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
        }),
        TranslateService
    ]);

    it('should have an url', inject([App], (app: App) => {
        expect(app.url).toEqual('https://github.com/ocombe/ng2-webpack');
    }));

    it('should have a translate & api properties', inject([App], (app) => {
        expect(!!app.translate).toEqual(true);
        expect(!!app.api).toEqual(true);
    }));

    // this test is async, and yet it works thanks to Zone \o/
    it('should be able to get translations for the view', inject([MockBackend, Http, TranslateService], (backend, http, translate) => {
        var connection; //this will be set when a new connection is emitted from the backend.
        backend.connections.subscribe(c => connection = c);

        // this will load translate json files from src/public/i18n
        translate.useStaticFilesLoader();

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');

        // this will request the translation from the backend because we use a static files loader for TranslateService
        translate.get('HELLO').subscribe((res: string) => {
            expect(res).toEqual('This is hello');
        });

        // mock response after the xhr request, otherwise it will be undefined
        connection.mockRespond(new Response(new ResponseOptions({body: '{"HELLO": "This is hello"}'})));
    }));

});
