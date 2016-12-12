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
  // TOTAL ------------------------------------------------------------------------
  var totalDisplay = document.getElementById('total');
  totalDisplay.innerText = "Total: " + bank.totalCash();

  var accountList = document.getElementById('accounts');

  for (account of bank.accounts){
    var accountListItem = document.createElement('li');
    accountListItem.innerText = account.owner + ": £" + account.amount.toFixed(2);
    accountList.appendChild(accountListItem);
  }

  //BUSINESS ----------------------------------------------------------------------
  var businessTotalDisplay = document.getElementById('business-total');
  businessTotalDisplay.innerText = "Business Total: " + bank.totalCash('business').toFixed(2);


  var businessDisplay = document.getElementById('business-accounts');
  for (account of bank.accounts){
    console.log(account.type);
    if (account.type === 'business'){
      var accountListItem = document.createElement('li');
      accountListItem.innerText = account.owner + ": £" + account.amount.toFixed(2);
      businessDisplay.appendChild(accountListItem);
    }
  }

  //PERSONAL ----------------------------------------------------------------------
  var personalTotalDisplay = document.getElementById('personal-total');
  personalTotalDisplay.innerText = "personal Total: " + bank.totalCash('personal').toFixed(2);

  var personalDisplay = document.getElementById('personal-accounts');
  for (account of bank.accounts){
    if (account.type === 'personal'){
    var accountListItem = document.createElement('li');
    accountListItem.innerText = account.owner + ": £" + account.amount.toFixed(2);
    personalDisplay.appendChild(accountListItem);
    }
  }




};
