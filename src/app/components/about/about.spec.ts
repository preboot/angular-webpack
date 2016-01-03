import {
    it,
    iit,
    describe,
    ddescribe,
    expect,
    inject,
    injectAsync,
    TestComponentBuilder,
    beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {About} from './about';


describe('About Component', () => {

    beforeEachProviders(() => []);


    it('should ...', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(About).then((fixture) => {
            fixture.detectChanges();
        });
    }));

});
