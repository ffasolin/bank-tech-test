const Transaction = require('../src/Transaction.js');

describe('Transactions', function() {
  var transaction, transfer;

  it('records transactions', function() {
    transaction = new Transaction();
    transfer = ['13/06/2017', '', 500, 2500];
    transaction.saveTransaction(transfer);
    expect(transaction.transactionsList).toContain(transfer);
  });
});
