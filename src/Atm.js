function Atm(balance = 0) {
  this._balance = balance;
}

Atm.prototype.makeDeposit = function(amount) {
  this._balance += amount;
};

Atm.prototype.displayBalance = function() {
  return this._balance;
};

module.exports = Atm;
