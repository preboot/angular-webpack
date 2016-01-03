describe('App', function() {

    beforeEach(function() {
        browser.get('/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual("Angular 2 App | ng2-webpack");
    });

    it('should have <header>', function() {
        expect(element(by.css('app header')).isPresent()).toEqual(true);
    });

    it('should have <main>', function() {
        expect(element(by.css('app main')).isPresent()).toEqual(true);
    });

    it('should have a main title', function() {
        // let's get the navigator language
        browser.executeScript(function() {
            return window.navigator.language;
        }).then(function(lang) {
            var userLang = lang.split('-')[0]; // use navigator lang if available
            userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';

            // compose title
            // if ng2-translate worked, it should have loaded the translation for "HELLO" which is "Bonjour" in french, and "Hello" in english
            var title = (userLang === 'fr' ? 'Bonjour' : 'Hello') + ' from Angular 2 !';

            expect(element(by.css('main .title')).getText()).toEqual(title);
        });
    });

    it('should have <footer>', function() {
        expect(element(by.css('app footer')).getText()).toEqual("Webpack Angular 2 Starter");
    });

});
