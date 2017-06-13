const Atm = require('../src/Atm.js');
const Transaction = require('../src/Transaction.js');

describe('Atm', function() {
  var atm, transaction;

  beforeEach(function() {
    atm = new Atm();
    transaction = new Transaction();
  });

  it('displays an initial balance of 0', function() {
    expect(atm.displayBalance()).toBe(0);
  });

  it('makes a deposit', function() {
    atm.deposit('13/06/2017', 500);
    expect(atm.displayBalance()).toBe(500);
  });

  it('makes a withdrawal', function() {
    atm.withdraw('13/06/2017', 500);
    expect(atm.displayBalance()).toBe(-500);
  });

  it('deposits are stored into deposits array', function() {
    atm.deposit('13/06/2017', 500);
    expect(atm.transaction.depositsList).toContain(['13/06/2017', 500, 500]);
  });

  it('withdrawals are stored into withdrawals array', function() {
    atm.withdraw('13/06/2017', 500);
    expect(atm.transaction.withdrawalsList).toContain(['13/06/2017', 500, -500]);
  });
});
