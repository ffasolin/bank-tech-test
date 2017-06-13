function Transaction() {
  this.transactionsList = [];
}

Transaction.prototype.saveTransaction = function(transfer) {
  this.transactionsList.push(transfer);
};

module.exports = Transaction;
