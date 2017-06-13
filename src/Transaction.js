function Transaction() {
this.depositsList = [];
}

Transaction.prototype.saveDeposit = function(transfer) {
  this.depositsList.push(transfer);
}

module.exports = Transaction;
