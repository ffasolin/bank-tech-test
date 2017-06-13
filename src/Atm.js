const Transaction = require('../src/Transaction.js');
const TransactionStyler = require('../src/TransactionStyler.js');

function Atm(balance = 0) {
  this._balance = balance;
  this.transaction = new Transaction();
  this.styler = new TransactionStyler();
}

Atm.prototype.displayBalance = function() {
  return this._balance;
};

Atm.prototype.deposit = function(date, amount) {
  this._balance += amount;
  this.transaction.saveTransaction([date, amount.toFixed(2), '',
                                    this._balance.toFixed(2)]);
  this.getStyle();
};

Atm.prototype.withdraw = function(date, amount) {
  this._balance -= amount;
  this.transaction.saveTransaction([date, '', amount.toFixed(2),
                                    this._balance.toFixed(2)]);
  this.getStyle();
};

Atm.prototype.getStyle = function() {
  this.styler.styledTransaction(this.transaction.transactionsList);
};

module.exports = Atm;
