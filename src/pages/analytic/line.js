import React, { useEffect, useState } from "react";
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
import instance from "../../lib/instance";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

export default function LineGraph() {
  const [score, setScore] = useState([]);
  const labels = new Array(20).fill(" ");
  const data = {
    labels,
    datasets: [
      {
        label: "내점수",
        data: score,
        fill: true,
        borderColor: "#1c69ff",
        backgroundColor: "#1c69ffa0",
      },
    ],
  };
  useEffect(() => {
    instance
      .get("http://10.150.149.2:3000/api/score/all")
      .then(({ data }) => setScore(data.slice(-20).map((data) => data.score)));
  }, []);

  return <Line options={options} data={data} />;
}
