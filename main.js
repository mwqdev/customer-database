// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

function buildCustomers(customerData) {

  // pictures
  // name
  // email
  // address
  // phone
  var customers = document.querySelector('.customers');

  var customersHeader = document.createElement('h1');
  customersHeader.innerText += 'INTERNAL COMPANY DIRECTORY';
  customers.appendChild(customersHeader);

  var firstName = [];
  var lastName = [];
  var fullNames = [];

  console.log(customerData);

  for (var i in customerData) {

    var customerCard = document.createElement('div');
    customerCard.className += 'customerCard';
    customers.appendChild(customerCard);

    var customerPic = document.createElement('img');
    customerPic.className += 'customerPic';
    customerPic.setAttribute('src', customerData[i].picture.large);
    customerCard.appendChild(customerPic);

    firstName.push(customerData[i].name.first);
    lastName.push(customerData[i].name.last);
    fullNames[i] = firstName[i] + " " + lastName[i];

    var customerMainInfo = document.createElement('div');
    customerMainInfo.className += "customerMain";

    var customerName = document.createElement('span');
    customerName.className += 'customerName';
    customerName.innerText += fullNames[i];

    var customerEmail = document.createElement('span');
    customerEmail.className += 'customerEmail';
    customerEmail.innerText += customerData[i].email;

    customerCard.appendChild(customerMainInfo);
    customerMainInfo.appendChild(customerName);
    customerMainInfo.appendChild(customerEmail);

    var customerContact = document.createElement('div');
    customerContact.className += 'customerContact';

    var customerStreet = document.createElement('span');
    customerStreet.innerText += customerData[i].location.street;

    var customerCity = document.createElement('span');
    customerCity.innerText += customerData[i].location.city + ', ' + customerData[i].location.state + ' ' + customerData[i].location.postcode;

    var customerPhone = document.createElement('span');
    customerPhone.innerText += customerData[i].cell;

    customerCard.appendChild(customerContact);
    customerContact.appendChild(customerStreet);
    customerContact.appendChild(customerCity);
    customerContact.appendChild(customerPhone);

    var customerPhone = document.createElement('span');
    customerPhone.className += 'customerPhone';
    customerPhone.innerText += customerData[i].phone;

    customerCard.appendChild(customerPhone);

  }

}

(function () {

  'use strict';

  $.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function (data) {
      buildCustomers(data.results);
    }
  });
})();