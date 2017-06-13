function TransactionStyler() {
  this.transactions = [];
}

TransactionStyler.prototype.styledDeposit = function(deposit) {
  for (var i = 0; i < deposit.length; i++) {
    this.transactions.push(`${deposit[i][0]} || ${deposit[i][1].toFixed(2)}` +
          ` || || ${deposit[i][2].toFixed(2)}`);
  }
};

TransactionStyler.prototype.styledWithdrawal = function(withdraw) {
  for (var i = 0; i < withdraw.length; i++) {
    this.transactions.push(`${withdraw[i][0]} || || ${withdraw[i][1].toFixed(2)}` +
          ` || ${withdraw[i][2].toFixed(2)}`);
  }
};

module.exports = TransactionStyler;
