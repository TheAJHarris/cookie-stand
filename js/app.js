'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattleList = document.getElementById('seattle');
var tokyoList = document.getElementById('tokyo');
var dubaiList = document.getElementById('dubai');
var parisList = document.getElementById('paris');
var limaList = document.getElementById('lima');

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

  render: function () {
    this.calculateHourlySales();
    for (var i = 0; i < this.hourSales.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}, ${this.hourSales[i]} cookies sold`;
      seattleList.appendChild(liElement);

    }
    liElement = document.createElement('li');
    liElement.textContent = `Total, ${this.dailySalesTotal} cookies sold`;
    seattleList.appendChild(liElement);
  }
};

var tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
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

  render: function () {
    this.calculateHourlySales();
    for (var i = 0; i < this.hourSales.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}, ${this.hourSales[i]} cookies sold`;
      tokyoList.appendChild(liElement);

    }
    liElement = document.createElement('li');
    liElement.textContent = `Total, ${this.dailySalesTotal} cookies sold`;
    tokyoList.appendChild(liElement);
  }
};


var dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
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

  render: function () {
    this.calculateHourlySales();
    for (var i = 0; i < this.hourSales.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}, ${this.hourSales[i]} cookies sold`;
      dubaiList.appendChild(liElement);

    }
    liElement = document.createElement('li');
    liElement.textContent = `Total, ${this.dailySalesTotal} cookies sold`;
    dubaiList.appendChild(liElement);
  }
};

var paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
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

  render: function () {
    this.calculateHourlySales();
    for (var i = 0; i < this.hourSales.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}, ${this.hourSales[i]} cookies sold`;
      parisList.appendChild(liElement);

    }
    liElement = document.createElement('li');
    liElement.textContent = `Total, ${this.dailySalesTotal} cookies sold`;
    parisList.appendChild(liElement);
  }
};

var lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
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

  render: function () {
    this.calculateHourlySales();
    for (var i = 0; i < this.hourSales.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}, ${this.hourSales[i]} cookies sold`;
      limaList.appendChild(liElement);

    }
    liElement = document.createElement('li');
    liElement.textContent = `Total, ${this.dailySalesTotal} cookies sold`;
    limaList.appendChild(liElement);
  }
};




seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// console.log(seattle.hourSales);

// 'use strict';

// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



// var stores = [];


// var seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   hourSalesArr: [],
//   dailySalesTotal: 0,


//   calculateHourlySales() {
//     for (var i = 0; i < hours.length; i++) {
//       var calcSalesRoundedUp = Math.ceil(this.getRandomCustomerNumber() * this.avg);
//       this.hourSalesArr[i] = calcSalesRoundedUp;
//       this.dailySalesTotal += calcSalesRoundedUp;
//     }
//   },

//   render: function () {
//     this.calculateHourlySales();
//     for (var i = 0; i < hourSales.length; i++)
//     var liElement = document.createElement('li');
//     liElement.textContent = `${hours[i]}: ${this.hourSalesArr[i]} cookies sold`
//     seattleList.appendChild(liElement);
//   }
// };
// var tokyo = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   hourSalesArr: [],
//   dailySalesTotal: 0,

//   getRandomCustomerNumber: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   calculateHourlySales() {
//     for (var i = 0; i < hours.length; i++) {
//       var calcSalesRoundedUp = Math.ceil(this.getRandomCustomerNumber() * this.avg);
//       this.hourSalesArr[i] = calcSalesRoundedUp;
//       this.dailySalesTotal += calcSalesRoundedUp;
//     }
//   },

//   render: function () {
//     this.calculateHourlySales();
//     for (var i = 0; i < hourSales.length; i++)
//     var liElement = document.createElement('li');
//     liElement.textContent = `${hours[i]}: ${this.hourSalesArr[i]} cookies sold`
//     // eslint-disable-next-line no-undef
//     tokyoList.appendChild(liElement);
//   }
// };
// var dubai = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 62.3,
//   hourSalesArr: [],
//   dailySalesTotal: 0,

//   getRandomCustomerNumber: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   calculateHourlySales() {
//     for (var i = 0; i < hours.length; i++) {
//       var calcSalesRoundedUp = Math.ceil(this.getRandomCustomerNumber() * this.avg);
//       this.hourSalesArr[i] = calcSalesRoundedUp;
//       this.dailySalesTotal += calcSalesRoundedUp;
//     }
//   },

//   render: function () {
//     this.calculateHourlySales();
//     for (var i = 0; i < hourSales.length; i++)
//     var liElement = document.createElement('li');
//     liElement.textContent = `${hours[i]}: ${this.hourSalesArr[i]} cookies sold`
//     dubaiList.appendChild(liElement);
//   }
// };
// var paris = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   hourSalesArr: [],
//   dailySalesTotal: 0,

//   getRandomCustomerNumber: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   calculateHourlySales() {
//     for (var i = 0; i < hours.length; i++) {
//       var calcSalesRoundedUp = Math.ceil(this.getRandomCustomerNumber() * this.avg);
//       this.hourSalesArr[i] = calcSalesRoundedUp;
//       this.dailySalesTotal += calcSalesRoundedUp;
//     }
//   },

//   render: function () {
//     this.calculateHourlySales();
//     for (var i = 0; i < hourSales.length; i++)
//     var liElement = document.createElement('li');
//     liElement.textContent = `${hours[i]}: ${this.hourSalesArr[i]} cookies sold`
//     paris.appendChild(liElement);
//   }
// };
// var lima = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   hourSalesArr: [],
//   dailySalesTotal: 0,

//   getRandomCustomerNumber: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   calculateHourlySales() {
//     for (var i = 0; i < hours.length; i++) {
//       var calcSalesRoundedUp = Math.ceil(this.getRandomCustomerNumber() * this.avg);
//       this.hourSalesArr[i] = calcSalesRoundedUp;
//       this.dailySalesTotal += calcSalesRoundedUp;
//     }
//   },

//   render: function () {
//     this.calculateHourlySales();
//     for (var i = 0; i < hourSales.length; i++)
//     var liElement = document.createElement('li');
//     liElement.textContent = `${hours[i]}: ${this.hourSalesArr[i]} cookies sold`
//     lima.appendChild(liElement);
//   }
// };

// function Store (name, min, max, avg) {
//   this.name = name;
//   this.min = min;
//   this.max = max;
//   this.avg = avg;
//   this.hourSalesArr = [];
//   this.dailySalesTotal = 0;
//   stores.push(this);
// }

// Store.prototype.getRandomCustomerNumber = function () {
//   return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
// };
// new Store('Seattle', '23', '65', '6.3');
// console.log('store array: ', stores);



// seattle.render();
// // console.log(seattle.hourSales);

