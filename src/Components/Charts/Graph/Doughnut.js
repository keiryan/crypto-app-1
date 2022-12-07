import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const PieGraph = (props) => {
  return (
    <Pie
      data={{
        labels: ["Red", "Blue", "Green"],
        datasets: [
          {
            data: props.greedValue.map((item) => item.value),
            backgroundColor: ["#336699", "#99ccff", "#cccc99"],
            display: true,
            borderColor: "#d1d6dc",
            borderWidth: 1,
            weight: 1,
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        rotation: -90,
        circumference: 180,
        cutout: "90%",

        maintainAspectRatio: true,
        responsive: true,
      }}
    />
  );
};
