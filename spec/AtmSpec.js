const Atm = require('../src/Atm.js')

describe('Atm', function() {
  var atm;

  it('displays an initial balance of 0', function() {
    atm = new Atm();
    expect(atm.displayBalance()).toBe(0);
  });
});
