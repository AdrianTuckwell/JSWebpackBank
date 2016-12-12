var Bank = require('../src/bank/bank.js');
var Account = require('../src/bank/account.js');

var BankView = function(bank){
   this.bank = bank;
}

BankView.prototype = {
render: function(){

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

    var totalDisplay = document.getElementById('total');
    var businessTotalDisplay = document.getElementById('business-total');
    var personalTotalDisplay = document.getElementById('personal-total');

    totalDisplay.innerText = "Total: " + this.bank.totalCash();
    businessTotalDisplay.innerText = "Business Total: " + this.bank.totalCash('business').toFixed(2);
    personalTotalDisplay.innerText = "personal Total: " + this.bank.totalCash('personal').toFixed(2);

    var businessDisplay = document.getElementById('business-accounts');
    var personalDisplay = document.getElementById('personal-accounts');

    populateAccountList(businessDisplay, this.bank.filteredAccounts('business'));
    populateAccountList(personalDisplay, this.bank.filteredAccounts('personal'));

    var button = document.getElementById('button');
    button.onclick = function() {
      
      businessDisplay.innerHTML = "";
      personalDisplay.innerHTML = "";

      console.log('clicked button');
      this.bank.addInterest(1.1);

      totalDisplay.innerText = "Total: " + this.bank.totalCash().toFixed(2);
      businessTotalDisplay.innerText = "Business Total: " + this.bank.totalCash('business').toFixed(2);
      personalTotalDisplay.innerText = "personal Total: " + this.bank.totalCash('personal').toFixed(2);

      populateAccountList(businessDisplay, this.bank.filteredAccounts('business'));
      populateAccountList(personalDisplay, this.bank.filteredAccounts('personal'));
      }.bind(this);

    }
  
}
module.exports = BankView;