describe('Lazy', function () {

  beforeEach(function () {
    browser.get('/lazy');
  });

  it('should have <my-lazy>', function () {
    var lazy = element(by.css('my-app my-lazy'));
    expect(lazy.isPresent()).toEqual(true);
    expect(lazy.getText()).toEqual("Lazy Works!");
  });

});
