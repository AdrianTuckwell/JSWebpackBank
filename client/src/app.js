var Bank = require('./bank/bank.js');
var sampleAccounts = require('../sample.json');
var Account = require('./bank/account.js');

var createItemForAccount = function(account) {
  var accountListItem = document.createElement('li');
  accountListItem.innerText = account.owner + ": £" + account.amount;
  return accountListItem;
};

var populateAccountList = function(listElement, accounts) {
  for(account of accounts) {
    listElement.appendChild(createItemForAccount(account));
  }
};

window.onload = function() {
  var bank = new Bank();
  for (accountData of sampleAccounts){
    bank.addAccount(new Account(accountData));
  }

  var totalDisplay = document.getElementById('total');
  var businessTotalDisplay = document.getElementById('business-total');
  var personalTotalDisplay = document.getElementById('personal-total');

  totalDisplay.innerText = "Total: " + bank.totalCash();
  businessTotalDisplay.innerText = "Business Total: " + bank.totalCash('business').toFixed(2);
  personalTotalDisplay.innerText = "personal Total: " + bank.totalCash('personal').toFixed(2);

  var businessDisplay = document.getElementById('business-accounts');
  var personalDisplay = document.getElementById('personal-accounts');

  populateAccountList(businessDisplay, bank.filteredAccounts('business'));
  populateAccountList(personalDisplay, bank.filteredAccounts('personal'));

};
