function StatementPrinter() {}

StatementPrinter.prototype.header = function() {
  return 'date || credit || debit || balance'
};

module.exports = StatementPrinter;
