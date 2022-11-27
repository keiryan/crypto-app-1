import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarGraph = (props) => {
  return (
    <Bar
      data={{
        labels: props.data.map((item) => {
          return moment.unix(item[0] / 1000).format("MM-DD-YY");
        }),
        datasets: [
          {
            data: props.data.map((item) => item[1]),
            borderColor: "#000000",
            pointRadius: 0,
            borderWidth: 3,
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
        tension: 0.5,
      }}
    />
  );
};
