const Transaction = require('../src/Transaction.js')

describe('Transactions', function() {
  var transaction;

  it('records all transactions', function() {
    transaction = new Transaction();
    var transfer = ['13/06/2017', 500, 2500]
    transaction.saveDeposit(transfer)
    expect(transaction.depositsList).toContain(transfer);
  });
});
