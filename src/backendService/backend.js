/*********************************************************\
 *                                                        *
 *  This is a wrapper for using LocalStorage as database  *
 *                                                        *
\*********************************************************/

const { mockData } = require("./mockData");

export const months = [
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

function randChangeOfSuccess() {
  // chance of success is 99.999999%
  return Math.random() > 0.0000001;
}

function returnAsync(data, success = randChangeOfSuccess()) {
  // Simulate async call
  // chance of success is 95%
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(data);
      } else {
        reject(new Error("DB Error: Something went wrong, please try again!"));
      }
    });
  });
}

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

export function getFilterOptions() {
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
  return returnAsync({
    years,
    months,
    categories,
    minSum,
    maxSum,
  });
  //return { years, months, categories, minSum, maxSum };
}
export function addExpense(expenseObject) {
  if (randChangeOfSuccess()) {
    // if function returns true, save expense
    let temp = getAllExpenses();
    expenseObject.id = new Date().getTime();
    temp.push(expenseObject);
    localStorage.setItem("expenses", JSON.stringify(temp));
    return returnAsync(expenseObject, true);
  }
  return returnAsync(expenseObject, false);
}

export function _deleteExpense(id) {
  if (randChangeOfSuccess()) {
    // if function returns true, delete expense
    let temp = getAllExpenses();
    temp = temp.filter((item) => item.id !== id);
    localStorage.setItem("expenses", JSON.stringify(temp));
    return returnAsync(id, true);
  }
  return returnAsync(id, false);
}

function saveFilterSelections(filters) {
  localStorage.setItem("filters", JSON.stringify(filters));
}

export function getLastSelectedFilters() {
  try {
    return returnAsync(JSON.parse(localStorage.getItem("filters")));
  } catch (e) {
    return returnAsync(e, false);
  }
}

export function getExpenses(filterObject) {
  try {
    if (randChangeOfSuccess()) {
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
          (item) =>
            months[new Date(item.date).getMonth()] === filterObject.month
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
      saveFilterSelections(filterObject);
      return returnAsync(temp);
    }
  } catch (e) {
    return returnAsync(e, false);
  }
}
