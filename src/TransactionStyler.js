function TransactionStyler() {
  this.transactions = [];
}

TransactionStyler.prototype.styledDeposit = function(deposit) {
  var flatDeposit = [].concat.apply([], deposit);

  this.transactions.push(`${flatDeposit[0]} || ${flatDeposit[1].toFixed(2)}` +
          ` || || ${flatDeposit[2].toFixed(2)}`);
};

TransactionStyler.prototype.styledWithdrawal = function(withdraw) {
  var flatWithdraw = [].concat.apply([], withdraw);

  this.transactions.push(`${flatWithdraw[0]} || || ${flatWithdraw[1].toFixed(2)}` +
          ` || ${flatWithdraw[2].toFixed(2)}`);
};

module.exports = TransactionStyler;
