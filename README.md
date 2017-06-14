# Bank

### A program modelling the functionality of a bank
* User is able to make deposit
* User is able to make withdrawal
* Balance can be displayed at any point
* Program allows user to print full statement in reverse order
by most recent transaction
* Full statement displays date, amount transferred, type of
transaction and final balance

## To get started:
(Please ensure npm and node are installed before running)
```
$ npm install
```

## To run tests:
```
$ jasmine
```
## Example in node:
```
var atm = new Atm();
undefined
> atm.deposit('10/01/2017', 1000);
undefined
> atm.deposit('13/01/2017', 2000);
undefined
> atm.withdraw('14/01/2017', 500);
undefined
> var receipt = new StatementPrinter();
undefined
> receipt.fullStatement(atm.styler.transactions);
date || credit || debit || balance
14/01/2012 ||  || 500.00 || 2500.00
13/01/2012 || 2000.00 ||  || 3000.00
10/01/2012 || 1000.00 ||  || 1000.00
undefined
```
