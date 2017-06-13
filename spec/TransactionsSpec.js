const Transaction = require('../src/Transaction.js');

describe('Transactions', function() {
  var transaction, transfer;

  beforeEach(function() {
    transaction = new Transaction();
    transfer = ['13/06/2017', 500, 2500];
  });

  it('records all transactions', function() {
    transaction.saveDeposit(transfer);
    expect(transaction.depositsList).toContain(transfer);
  });

  it('records all transactions', function() {
    transaction.saveWithdrawal(transfer);
    expect(transaction.withdrawalsList).toContain(transfer);
  });
});
