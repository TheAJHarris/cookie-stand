'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  hourSales: [],
  dailySalesTotal: 0,

  getRandomCustomerNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calculateHourlySales() {
    for (var i = 0; i < hours.length; i++) {
      var calcSalesRound = Math.ceil(this.getRandomCustomerNumber() * this.avg);
      this.hourSales[i] = calcSalesRound;
      this.dailySalesTotal += calcSalesRound;
    }
  },

  render: function() {
    this.calculateHourlySales();
    for ( var i = 0, i < hourSales.length; i++)
      var liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}, this.hourSales[i]} cookies sold`
      seattle.appendChild(liElement);
  // 
  }
};

seattle.render();
// console.log(seattle.hourSales);

