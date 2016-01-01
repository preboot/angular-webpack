describe('App', function() {

    beforeEach(function() {
        browser.get('/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual("Angular 2 App");
    });

    it('should have <header>', function() {
        expect(element(by.css('app header')).isPresent()).toEqual(true);
    });

    it('should have <main>', function() {
        expect(element(by.css('app main')).isPresent()).toEqual(true);
    });

    it('should have <footer>', function() {
        expect(element(by.css('app footer')).getText()).toEqual("WebPack Angular 2 Starter");
    });

});
