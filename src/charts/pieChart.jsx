import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { colorPalette } from "../utils/colorPalette";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart({ expenseList }) {
  const createData = () => {
    if (!expenseList) return;
    const data = {
      labels: [],
      datasets: [
        {
          label: "Sum of Expenses",
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
        data.datasets[0].data[index] += item.sum;
      } else {
        data.labels.push(category);
        data.datasets[0].data.push(item.sum);
        data.datasets[0].backgroundColor.push(colorPalette[category]);
        data.datasets[0].borderColor.push("transparent");
      }
    });

    return data;
  };

  return expenseList && <Pie data={createData()}></Pie>;
}
