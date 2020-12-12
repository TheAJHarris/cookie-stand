'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var myForm = document.getElementById('form');
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

Store.prototype.getRandomCustomerNumber = function(){
  return Math.floor(Math.random() * (this.max - this.min) + this.min);
};

Store.prototype.calculateHourlySales = function(){
  for (var i = 0; i < hours.length; i++) {
    var calcSalesRoundedUp = Math.ceil(this.getRandomCustomerNumber() * this.avg);
    this.hourSalesArr.push(calcSalesRoundedUp);
    this.dailySalesTotal += calcSalesRoundedUp;
  }
};


Store.prototype.renderTable = function(){
  this.calculateHourlySales();
  var trElement = document.createElement('tr');

  var tdElement = document.createElement('td');
  tdElement.textContent = this.name;
  trElement.appendChild(tdElement);

  for (var i = 0; i < hours.length; i++){
    tdElement = document.createElement('td');
    tdElement.textContent = this.hourSalesArr[i];
    trElement.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = this.dailySalesTotal;
  trElement.appendChild(tdElement);
  storeTable.appendChild(trElement);
};

new Store('Seattle', '23', '65', '6.3');
new Store('Tokyo', '3', '24', '1.2');
new Store('Dubai', '11', '38', '3.7');
new Store('Paris', '20', '38', '2.3');
new Store('Lima', '2', '16', '4.6');
// console.log('store array: ', stores);

function renderHeader() {
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Locations';
  trElement.appendChild(thElement);

  for (var i = 0; i < hours.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = hours[i];
    trElement.appendChild(tdElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Total';
  trElement.appendChild(thElement);
  storeTable.appendChild(trElement);
}

function renderFooter(){
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Hourly Totals';
  trElement.appendChild(thElement);
  var totalOfTotals = 0;
  var hourlyTotals = 0;
  for (var i = 0; i < hours.length; i++){
    hourlyTotals = 0;
    for (var j = 0; j < stores.length; j++){
      hourlyTotals += stores[j].hourSalesArr[i];
      totalOfTotals += stores[j].hourSalesArr[i];
    }
    thElement = document.createElement('th');
    thElement.textContent = hourlyTotals;
    trElement.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = totalOfTotals;
  trElement.appendChild(thElement);
  storeTable.appendChild(trElement);
}

function storeSubmit(event) {
  event.preventDefault();
  console.log(event, 'event');
  var storeName = event.target.store.value;
  var storeMin = parseInt(event.target.min.value);
  var storeMax = parseInt(event.target.max.value);
  var storeAvg = parseInt(event.target.avg.value);
  console.log(storeName, storeMin, storeMax, storeAvg);
  new Store(storeName, storeMin, storeMax, storeAvg);
  renderStore();
}

function renderStore(){
  storeTable.innerHTML='';
  renderHeader();
  for (var i = 0; i < stores.length; i++) {
    stores[i].renderTable();
  }
  renderFooter();
}

renderStore();


myForm.addEventListener('submit', storeSubmit);
