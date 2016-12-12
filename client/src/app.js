var Bank = require('./bank/bank.js');
var sampleAccounts = require('../sample.json');
var Account = require('./bank/account.js');



window.onload = function() {
  console.log('loaded');
  var bank = new Bank();

  for (accountData of sampleAccounts){
    bank.addAccount(new Account(accountData));
  }


  console.log("new bank", bank);

  var totalDisplay = document.getElementById('total');
  totalDisplay.innerText = "Total: " + bank.totalCash();

  var accountList = document.getElementById('accounts');

  for (account of bank.accounts){
    var accountListItem = document.createElement('li');
    accountListItem.innerText = account.owner + ": £" +account.amount;
    accountList.appendChild(accountListItem);

  }



};
