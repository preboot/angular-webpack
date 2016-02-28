import {
    it,
    fit,
    describe,
    fdescribe,
    injectAsync,
    TestComponentBuilder,
    beforeEachProviders
} from 'angular2/testing';

import {About} from './index';

describe('About Component', () => {

    beforeEachProviders(() => []);

    it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
        return tcb.createAsync(About).then((fixture) => {
            fixture.detectChanges();
        });
    }));

});
