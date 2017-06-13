const StatementPrinter = require('../src/StatementPrinter.js');

describe('StatementPrinter', function() {
  var statement;

  it('has a statement header', function() {
    statement = new StatementPrinter();
    expect(statement.header).toBe('date || credit || debit || balance');
  });
});
