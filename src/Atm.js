const Transaction = require('../src/Transaction.js');

function Atm(balance = 0) {
  this._balance = balance;
  this.transaction = new Transaction();
}

Atm.prototype.deposit = function(date, amount) {
  this._balance += amount;
  this.transaction.saveDeposit([date, amount, this._balance]);
};

Atm.prototype.withdraw = function(date, amount) {
  this._balance -= amount;
  this.transaction.saveWithdrawal([date, amount, this._balance]);
};

Atm.prototype.displayBalance = function() {
  return this._balance;
};

module.exports = Atm;
