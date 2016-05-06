describe('Home', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <my-home>', function () {
    var home = element(by.css('my-app my-home'));
    expect(home.isPresent()).toEqual(true);
    expect(home.getText()).toEqual("Home Works!");
  });

});
