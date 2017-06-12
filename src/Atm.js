function Atm(balance = 0) {
  this._balance = balance;
}

Atm.prototype.displayBalance = function() {
  return this._balance;
};

module.exports = Atm;
