const StatementPrinter = require('../src/StatementPrinter.js');

describe('StatementPrinter', function() {
  var finalStatement, statement, transactions;

  it('has a statement header', function() {
    statement = new StatementPrinter();
    expect(statement.header).toBe('date || credit || debit || balance');
  });

  it('returns styled strings from array', function() {
    statement = new StatementPrinter();
    transactions = [['10/01/2012 || 1000.00 || || 1000.00'],
                    ['13/01/2012 || 2000.00 || || 3000.00'],
                    ['14/01/2012 || || 500.00 || 2500.00']];
    finalStatement = ['date || credit || debit || balance',
                     '14/01/2012 || || 500.00 || 2500.00',
                     '13/01/2012 || 2000.00 || || 3000.00',
                     '10/01/2012 || 1000.00 || || 1000.00'].join('\n');
    expect(statement.fullStatement(transactions)).toBe(finalStatement);
  });
});
