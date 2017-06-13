const Atm = require('../src/Atm.js');

describe('Atm', function() {
  var atm;

  beforeEach(function() {
    atm = new Atm();
  });

  it('displays an initial balance of 0', function() {
    expect(atm.displayBalance()).toBe(0);
  });

  it('makes a deposit', function() {
    atm.deposit(500);
    expect(atm.displayBalance()).toBe(500);
  });

  it('makes a withdrawal', function() {
    atm.withdraw(500);
    expect(atm.displayBalance()).toBe(-500);
  });
});
