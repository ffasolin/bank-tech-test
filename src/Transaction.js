function Transaction() {
  this.depositsList = [];
  this.withdrawalsList = [];
}

Transaction.prototype.saveDeposit = function(transfer) {
  this.depositsList.push(transfer);
};

Transaction.prototype.saveWithdrawal = function(transfer) {
  this.withdrawalsList.push(transfer);
};

module.exports = Transaction;
