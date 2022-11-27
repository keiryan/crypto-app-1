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
      data={{
        labels: ["", "", "", "", "", ""],
        datasets: [
          {
            label: "",
            data: [12, 45, 14, 236, 74, 589, 558, 95],
            // data: [props.coindata],
            borderColor: "#000000",
            //here is the part for the gradient fill
            // backgroundColor: (context) => {
            //   const ctx = context.chart.ctx;
            //   const gradient = ctx.createLinearGradient(0, 0, 0, 350);
            //   gradient.addColorStop(0, "rgba(0, 255, 95, .5)");
            //   gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
            //   return gradient;
            // },
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
export default Sparklines;
