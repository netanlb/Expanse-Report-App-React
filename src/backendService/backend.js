/*********************************************************\
 *                                                        *
 *  This is a wrapper for using LocalStorage as database  *
 *                                                        *
\*********************************************************/

<<<<<<< HEAD

//Mock data
let mockData = [
  {
    id: 1,
    date: new Date(2019, 0, 1),
    category: "Home",
    name: "Rent",
    sum: 100,
    description: "Rent",
  },
  {
    id: 2,
    date: new Date(2020, 0, 1),
    category: "Energy",
    name: "Dor Energy",
    sum: 250,
    description: "Gas station",
  },
  {
    id: 3,
    date: new Date(2019, 0, 1),
    category: "Entertainment",
    name: "CinemaCity",
    sum: 50,
    description: "Cinema",
  },
  {
    id: 4,
    date: new Date(2019, 0, 1),
    category: "Food",
    name: "McDonalds",
    sum: 50,
    description: "Burger",
  },
  {
    id: 5,
    date: new Date(2018, 0, 1),
    category: "Food",
    name: "KFC",
    sum: 89,
    description: "Chicken",
  },
  {
    id: 6,
    date: new Date(2018, 5, 1),
    category: "Food",
    name: "KFC",
    sum: 120,
    description: "Chicken",
  },
];

//save in local storage
localStorage.setItem("expenses", JSON.stringify(mockData));
localStorage.setItem("lastId", 6);

function getAllExpenses() {
    return JSON.parse(localStorage.getItem("expenses"));
  }

function getFilterOptions() {
  let temp = this.getAllExpenses();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  //Get distinct years
  let years = [
    ...new Set(temp.map((item) => new Date(item.date).getFullYear())),
  ];
  let categories = [
    "Home",
    "Bills",
    "Energy",
    "Insurence",
    "Communication",
    "Food",
    "Transportation",
    "Entertainment",
    "Other",
  ];
  //Get min and max sum
  let minSum = Math.min(...temp.map((item) => item.sum));
  let maxSum = Math.max(...temp.map((item) => item.sum));
  return { years, months, categories, minSum, maxSum };
}
function addExpense(expenseObject) {
  let temp = this.getAllExpenses();
  expenseObject.id = Number(localStorage.getItem("lastId")) + 1;
  temp.push(expenseObject);
  localStorage.setItem("lastId", expenseObject.id);
  localStorage.setItem("expenses", JSON.stringify(temp));
}

function deleteExpense(id) {
  let temp = this.getAllExpenses();
  temp = temp.filter((item) => item.id !== id);
  localStorage.setItem("expenses", JSON.stringify(temp));
}

function getExpanses(filterObject) {
  let temp = this.getAllExpenses();
  if (filterObject) {
    if (filterObject.year) {
      temp = temp.filter(
        (item) => new Date(item.date).getFullYear() === filterObject.year
      );
    }
    if (filterObject.month) {
      temp = temp.filter(
        (item) => new Date(item.date).getMonth() === filterObject.month
      );
    }
    if (filterObject.category) {
      temp = temp.filter((item) => item.category === filterObject.category);
    }
    if (filterObject.minSum) {
      temp = temp.filter((item) => item.sum >= filterObject.minSum);
    }
    if (filterObject.maxSum) {
      temp = temp.filter((item) => item.sum <= filterObject.maxSum);
    }
  }
  return temp;
}
=======
const { mockData } = require("./mockData");
const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


  
  //save in local storage
  localStorage.setItem("expenses", JSON.stringify(mockData));
  localStorage.setItem("lastId", 6);
  
  function getAllExpenses() {
      return JSON.parse(localStorage.getItem("expenses"));
    }

  function convertMonthNameToMonthNumber(monthName){
    return new Date(Date.parse(monthName +" 1, 2012")).getMonth()
  }

  function getFilterOptions() {
    let temp = getAllExpenses();
    //Get distinct years
    let years = [
      ...new Set(temp.map((item) => new Date(item.date).getFullYear())),
    ];
    let categories = [
      "Home",
      "Bills",
      "Energy",
      "Insurence",
      "Communication",
      "Food",
      "Transportation",
      "Entertainment",
      "Other",
    ];
    //Get min and max sum
    let minSum = Math.min(...temp.map((item) => item.sum));
    let maxSum = Math.max(...temp.map((item) => item.sum));
    return { years, months, categories, minSum, maxSum };
  }
  function addExpense(expenseObject) {
    let temp = getAllExpenses();
    expenseObject.id = Number(localStorage.getItem("lastId"));
    temp.push(expenseObject);
    localStorage.setItem("lastId", expenseObject.id);
    localStorage.setItem("expenses", JSON.stringify(temp));
  }
  
  function deleteExpense(id) {
    let temp = getAllExpenses();
    temp = temp.filter((item) => item.id !== id);
    localStorage.setItem("expenses", JSON.stringify(temp));
  }
  
  function getExpanses(filterObject) {
    let temp = getAllExpenses();
    if (filterObject) {
      if (filterObject.Year) {
        temp = temp.filter(
          (item) => new Date(item.date).getFullYear() === filterObject.Year
        );
      }
      if (filterObject.Month) {
        temp = temp.filter(
            
          (item) => months[new Date(item.date).getMonth()] === filterObject.Month);
      }
      if (filterObject.Category) {
        temp = temp.filter((item) => item.category === filterObject.Category);
      }
      if (filterObject.startSum) {
        temp = temp.filter((item) => item.sum >= filterObject.startSum);
      }
      if (filterObject.endSum) {
        temp = temp.filter((item) => item.sum <= filterObject.endSum);
      }
    }
    return temp;
  }

module.exports = {getExpanses, addExpense, deleteExpense, getFilterOptions}
>>>>>>> 4c50a4867f4526294aca27d86fd80bb9ed747c0f
