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
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
const Sparklines = (props) => {
  return (
    <Line
      width={110}
      height={25}
      data={{
        labels: new Array(props.coinData?.length).fill(""),
        datasets: [
          {
            label: "",
            data: props.coinData.map((price) => {
              return price;
            }),

            borderColor: "lightgreen",
            tension: 0.5,
            pointRadius: 0,
            borderWidth: 1,
            fill: false,
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: "Chart.js Line Chart",
          },
        },
        scales: {
          y: {
            display: false,
            grid: {
              display: false,
              drawBorder: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        },
        tension: 0,
      }}
    />
  );
};
export default Sparklines;
