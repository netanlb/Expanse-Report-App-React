/*********************************************************\
 *                                                        *
 *  This is a wrapper for using LocalStorage as database  *
 *                                                        *
\*********************************************************/

const { mockData } = require("./mockData");
const months = [
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

//save in local storage
localStorage.setItem("expenses", JSON.stringify(mockData));
localStorage.setItem("lastId", 6);

function orderByDate(a, b) {
  return new Date(b.date) - new Date(a.date);
}

function getAllExpenses() {
  let temp = JSON.parse(localStorage.getItem("expenses"));
  temp.sort(orderByDate);
  return temp;
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
    "Groceries",
    "Restaurants",
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

function getExpenses(filterObject) {  
  //If no filter is selected, set default filter to current month and year
  let blankFilter = false;
  let lastDate = {};
  if(JSON.stringify(filterObject) === "{}" || (filterObject.Month === "" && filterObject.Year === "")){
    blankFilter = true;
    lastDate = {
      Year : new Date().getFullYear(),
      Month : months[new Date().getMonth()]
    }
  }
  console.log(filterObject)
  let temp = getAllExpenses();
  if (filterObject) {
    if (filterObject.Year || blankFilter) {
      temp = temp.filter(
        (item) => new Date(item.date).getFullYear() === (blankFilter ? lastDate.Year : filterObject.Year)
      );
    }
    if (filterObject.Month || blankFilter) {
      temp = temp.filter(
        (item) => months[new Date(item.date).getMonth()] === (blankFilter ? lastDate.Month : filterObject.Month)
      );
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

module.exports = { getExpenses, addExpense, deleteExpense, getFilterOptions };
