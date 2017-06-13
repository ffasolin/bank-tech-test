const Transaction = require('../src/Transaction.js');
const TransactionStyler = require('../src/TransactionStyler.js');

function Atm(balance = 0) {
  this._balance = balance;
  this.transaction = new Transaction();
  this.styler = new TransactionStyler();
}

Atm.prototype.deposit = function(date, amount) {
  this._balance += amount;
  this.transaction.saveDeposit([date, amount, this._balance]);
  this.styler.styledDeposit(this.transaction.depositsList);
};

Atm.prototype.withdraw = function(date, amount) {
  this._balance -= amount;
  this.transaction.saveWithdrawal([date, amount, this._balance]);
  this.styler.styledWithdrawal(this.transaction.withdrawalsList);
};

Atm.prototype.displayBalance = function() {
  return this._balance;
};

module.exports = Atm;
