const TransactionStyler = require('../src/TransactionStyler.js');
const StatementPrinter = require('../src/StatementPrinter.js');

describe('TransactionStyler', function() {
  var receipt, styled, styler, transaction;

  beforeEach(function() {
    styler = new TransactionStyler();
  });

  it('stores a deposit transaction styled', function() {
    transaction = [['13/06/2017', 500, 500]];
    styled = '13/06/2017 || 500.00 || || 500.00';
    styler.styledDeposit(transaction)
    expect(styler.transactions[0]).toBe(styled);
  });

  it('stores a withdrawal transaction styled', function() {
    transaction = [['13/06/2017', 500, -500]];
    styled = '13/06/2017 || || 500.00 || -500.00';
    styler.styledWithdrawal(transaction)
    expect(styler.transactions[0]).toBe(styled);
  });

  it('stores more than one transactions styled', function() {
    transaction = [['13/06/2017', 1, -1], ['13/06/2017', 2, -3],
                   ['13/06/2017', 3, -6], ['13/06/2017', 4, -10]];
    styled = 'date || credit || debit || balance' + '\n' +
             '13/06/2017 || || 4.00 || -10.00' + '\n' +
             '13/06/2017 || || 3.00 || -6.00' + '\n' +
             '13/06/2017 || || 2.00 || -3.00' + '\n' +
             '13/06/2017 || || 1.00 || -1.00';
    styler.styledWithdrawal(transaction);
    receipt = new StatementPrinter();
    expect(receipt.fullStatement(styler.transactions)).toBe(styled);
  });
});
