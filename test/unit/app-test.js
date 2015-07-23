describe('Main', function () {
  var getMessage = require('js/app').getMessage;

  it('getMessage', function () {
    expect(getMessage()).to.equal('Hello world');
  });
});
