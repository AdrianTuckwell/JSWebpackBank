var Bank = require('./bank/bank.js');
var sampleAccounts = require('../sample.json');
var Account = require('./bank/account.js');
var BankView = require('../views/bank_view');

window.onload = function() {
  // new up a new bank object
  var bank = new Bank();
  // get sample data from the JSON file
  for (accountData of sampleAccounts){
    bank.addAccount(new Account(accountData));
  }

  // new up BankView object that takes care of populating the display
  var view = new BankView(bank);
  // call the render prototype
  view.render();  
};
