function StatementPrinter() {
  this.header = 'date || credit || debit || balance';
}

StatementPrinter.prototype.fullStatement = function(transactions) {
  var reversedTransactions = [].concat(transactions).reverse();

  return [].concat.apply(this.header, [reversedTransactions]).join('\n');
};

module.exports = StatementPrinter;
