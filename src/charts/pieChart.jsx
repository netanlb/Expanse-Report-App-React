import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { colorPalette } from "../utils/colorPalette";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart({ expenseList }) {
  console.log(expenseList);

  const createData = () => {
    if (!expenseList) return;
    const data = {
      labels: [],
      datasets: [
        {
          label: "# of Expenses",
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 1,
        },
      ],
    };

    expenseList.forEach((item) => {
      const category = item.category;
      const categoryExists = data.labels.includes(category);

      if (categoryExists) {
        const index = data.labels.indexOf(category);
        data.datasets[0].data[index]++;
      } else {
        data.labels.push(category);
        data.datasets[0].data.push(1);
        data.datasets[0].backgroundColor.push(colorPalette[category]);
        data.datasets[0].borderColor.push("#D3D3D3");
      }
    });

    return data;
  };

  return expenseList && <Pie data={createData()}></Pie>;
}
