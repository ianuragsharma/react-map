import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
Chart.defaults.color = "white";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Forest Change over time",
      data: [200, 350, 100, 510, 200],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      lineTension: 0.5,
    },
  ],
};
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};
const LineChat = () => {
  return (
    <div className="component-wrapper linechart-continaer">
      <div className="chart-heading">Forest Change over time</div>
      <Line className="linechart" options={options} data={data} />
    </div>
  );
};

export { LineChat };
