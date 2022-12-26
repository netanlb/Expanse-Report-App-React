//Mock data
const mockData = [
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

  module.exports = { mockData };