function TransactionStyler() {
  this.transactions = [];
}

TransactionStyler.prototype.styledDeposit = function(deposit) {
  this.transactions.push(`${deposit[0]} || ${deposit[1].toFixed(2)} || || ${deposit[2].toFixed(2)}`);
};

TransactionStyler.prototype.styledWithdrawal = function(withdraw) {
  this.transactions.push(`${withdraw[0]} || || ${withdraw[1].toFixed(2)} || ${withdraw[2].toFixed(2)}`);
};

module.exports = TransactionStyler;
