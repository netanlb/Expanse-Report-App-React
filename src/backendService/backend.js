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
if (!localStorage.getItem("expenses")) {
  localStorage.setItem("expenses", JSON.stringify(mockData));
}

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
  expenseObject.id = new Date().getTime();
  temp.push(expenseObject);
  localStorage.setItem("expenses", JSON.stringify(temp));
  return expenseObject;
}

function _deleteExpense(id) {
  let temp = getAllExpenses();
  temp = temp.filter((item) => item.id !== id);
  localStorage.setItem("expenses", JSON.stringify(temp));
}

function saveFilterSelections(filters) {
  localStorage.setItem("filters", JSON.stringify(filters));
}

function getLastSelectedFilters() {
  return JSON.parse(localStorage.getItem("filters"));
}

function getExpenses(filterObject) {
  saveFilterSelections(filterObject);

  let temp = getAllExpenses();

  temp.map((item) => {
    item.month = months[new Date(item.date).getMonth()];
    item.year = new Date(item.date).getFullYear();
    return item;
  });

  if (!filterObject) return temp;
  //If no filter is selected, set default filter to current month and year

  if (filterObject.year) {
    temp = temp.filter(
      (item) => new Date(item.date).getFullYear() === filterObject.year
    );
  }
  if (filterObject.month) {
    temp = temp.filter(
      (item) => months[new Date(item.date).getMonth()] === filterObject.month
    );
  }
  if (filterObject.category) {
    temp = temp.filter((item) => item.category === filterObject.category);
  }
  if (filterObject.startSum) {
    temp = temp.filter((item) => item.sum >= filterObject.startSum);
  }
  if (filterObject.endSum) {
    temp = temp.filter((item) => item.sum <= filterObject.endSum);
  }

  return temp;
}

module.exports = {
  months,
  getExpenses,
  addExpense,
  _deleteExpense,
  getFilterOptions,
  getLastSelectedFilters,
};
