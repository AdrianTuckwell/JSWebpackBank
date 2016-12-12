var Bank = require('./bank/bank.js');
var sampleAccounts = require('../sample.json');
var Account = require('./bank/account.js');
var BankView = require('../views/bank_view');



window.onload = function() {
  var bank = new Bank();
  for (accountData of sampleAccounts){
    bank.addAccount(new Account(accountData));
  }


  var button = document.getElementById('button');
  button.onclick = function(bank) {
    console.log('clicked button');
    this.bank.addInterest(1.1);
    view.render();
  }
    // }.bind(this);






  var view = new BankView(bank);
  view.render();

  
};
