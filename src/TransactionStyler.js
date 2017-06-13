function TransactionStyler() {
  this.transactions = [];
}

TransactionStyler.prototype.styledTransaction = function(transaction) {
  for (var i = 0; i < transaction.length; i++) {
    this.transactions.push(`${transaction[i][0]} || ${transaction[i][1]}` +
          ` || ${transaction[i][2]} || ${transaction[i][3]}`);
  }
};

module.exports = TransactionStyler;
