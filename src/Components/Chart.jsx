import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Chart = ({ arr, days,currencySymbol }) => {
  const prices = [];
  const date = [];

  for (let i = 0; i < arr.length; i++) {
    if (days === "24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
    else date.push(new Date(arr[i][0]).toLocaleDateString());
    prices.push(arr[i][1]);
  }

  return (
    <Line
      options={{
        responsive: true,
      }}
      data={{
        labels: date,
        datasets: [
          {
            label: `price in ${currencySymbol}`,
            data: prices,
            borderColor: "rgb(107,70,193)",
            backgroundColor: "rgba(107,70,193,0.5)",
          },
        ],
      }}
    />
  );
};

export default Chart;
