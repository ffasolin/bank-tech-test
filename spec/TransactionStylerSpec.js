const TransactionStyler = require('../src/TransactionStyler.js')

describe('TransactionStyler', function() {
  var styled, styler, transaction;

  it('records all transactions', function() {
    styler = new TransactionStyler();
    transaction = ['13/06/2017', 500, 500];
    styled = '13/06/2017 || 500.00 || || 500.00';
    styler.styledDeposit(transaction)
    expect(styler.transactions[0]).toBe(styled);
  });

  it('records all transactions', function() {
    styler = new TransactionStyler();
    transaction = ['13/06/2017', 500, -500];
    styled = '13/06/2017 || || 500.00 || -500.00';
    styler.styledWithdrawal(transaction)
    expect(styler.transactions[0]).toBe(styled);
  });
});
