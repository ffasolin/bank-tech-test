const Atm = require('../src/Atm.js');

describe('Atm', function() {
  var atm, depo, wdraw;

  beforeEach(function() {
    atm = new Atm();
  });

  it('displays an initial balance of 0', function() {
    expect(atm.displayBalance()).toBe(0);
  });

  describe('deposit', function() {
    beforeEach(function() {
      atm.deposit('13/06/2017', 500);
    });

    it('makes a deposit', function() {
      expect(atm.displayBalance()).toBe(500);
    });

    it('deposits are stored into deposits array', function() {
      depo = ['13/06/2017', (500).toFixed(2), '', (500).toFixed(2)];
      expect(atm.transaction.transactionsList).toContain(depo);
    });
  });

  describe('withdrawal', function() {
    beforeEach(function() {
      atm.withdraw('13/06/2017', 500);
    });

    it('makes a withdrawal', function() {
      expect(atm.displayBalance()).toBe(-500);
    });

    it('withdrawals are stored into withdrawals array', function() {
      wdraw = ['13/06/2017', '', (500).toFixed(2), (-500).toFixed(2)];
      expect(atm.transaction.transactionsList).toContain(wdraw);
    });
  });
});
