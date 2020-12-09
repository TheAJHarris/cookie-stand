'use strict';

var hours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'];

var storeTable = document.getElementById('storeInfo');

var stores = [];

function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourSalesArr = [];
  this.dailySalesTotal = 0;
  stores.push(this);
}

Store.prototype.getRandomCustomerNumber = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Store.prototype.calculateHourlySales = function () {
  for (var i = 1; i < hours.length - 1; i++) {
    var calcSalesRoundedUp = Math.ceil(this.getRandomCustomerNumber() * this.avg);
    this.hourSalesArr.push(calcSalesRoundedUp);
    this.dailySalesTotal += calcSalesRoundedUp;
  }
};


Store.prototype.renderTable = function () {
  this.calculateHourlySales();
  var trElement = document.createElement('tr');
  storeTable.appendChild(trElement);

  var thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);

  for (var i = 0; i < this.hourSalesArr.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = this.hourSalesArr[i];
    trElement.appendChild(tdElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = this.dailySalesTotal;
  trElement.appendChild(thElement);
};

var seattle = new Store('Seattle', '23', '65', '6.3');
var tokyo = new Store('Tokyo', '3', '24', '1.2');
var dubai = new Store('Dubai', '11', '38', '3.7');
var paris = new Store('Paris', '20', '38', '2.3');
var lima = new Store('Lima', '2', '16', '4.6');
// console.log('store array: ', stores);

function renderHeader() {
  var trElement = document.createElement('tr');
  storeTable.appendChild(trElement);

  for (var i = 0; i < hours.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = hours[i];
    trElement.appendChild(tdElement);
  }
}
renderHeader();
seattle.renderTable();
// // console.log(seattle.hourSales);
tokyo.renderTable();
dubai.renderTable();
paris.renderTable();
lima.renderTable();