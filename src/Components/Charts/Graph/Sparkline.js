import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
  registerables,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";

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
const Div = styled.div`
  width: 100%;

  height: 100%;
`;
const LineGraph = (props) => {
  const [selectedType, setSelectedType] = useState(props.selectedType);
  useEffect(() => {
    setSelectedType(props.selectedType);
  }, [props.selectedType]);
  return (
    <Div>
      <Line
        data={{
          labels: props.data.map((item) => {
            return moment.unix(item[0] / 1000).format("MM-DD-YY");
          }),
          datasets: [
            {
              data: props.data.map((item) => item[1]),
              borderColor: "green",
              pointRadius: 0,
              borderWidth: 2,
              fill: false,
              backgroundColor: "#303234",
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
              display: true,
              grid: {
                display: true,
                drawBorder: true,
              },
            },
            x: {
              display: true,
              grid: {
                display: true,
                drawBorder: true,
              },
            },
          },
          tension: 0.5,
        }}
      />
    </Div>
  );
};

export default LineGraph;
