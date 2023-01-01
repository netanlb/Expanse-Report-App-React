import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { colorPalette } from "../utils/colorPalette";
import { SPENT_ON_CATEGORY, NUM_OF_EXPENSES } from "../utils/datasetLabels";
import { Typography, Box } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart({ expenseList, datasetLabels, groupBy }) {
  const createData = (datasetLabels, groupBy) => {
    if (!(expenseList || datasetLabels || groupBy)) return;
    const data = {
      labels: [],
      datasets: datasetLabels.map((label) => ({
        label: label,
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      })),
    };

    expenseList.forEach((item) => {
      const label = item[groupBy];
      const categoryExists = data.labels.includes(label);

      if (categoryExists) {
        const index = data.labels.indexOf(label);

        data.datasets.forEach((dataset) => {
          if (dataset.label === SPENT_ON_CATEGORY) {
            dataset.data[index] += item.sum;
          }

          if (dataset.label === NUM_OF_EXPENSES) {
            dataset.data[index]++;
          }
        });
      } else {
        data.labels.push(label);

        data.datasets.forEach((dataset) => {
          if (dataset.label === SPENT_ON_CATEGORY) {
            dataset.data.push(item.sum);
          }
          if (dataset.label === NUM_OF_EXPENSES) {
            dataset.data.push(1);
          }

          dataset.backgroundColor.push(colorPalette[label] + "30"); // added number to hex for opacity
          dataset.borderColor.push(colorPalette[label]);
        });
      }
    });

    return data;
  };

  return (
    expenseList && (
      <Box sx={{ marginBottom: "3em" }}>
        <Typography variant="h6" sx={{ fontWeight: 600, textAlign: "center" }}>
          EXPENSES BY {groupBy.toUpperCase()}
        </Typography>
        <Pie data={createData(datasetLabels, groupBy)}></Pie>
      </Box>
    )
  );
}
