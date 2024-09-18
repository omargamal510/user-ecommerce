import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
``;
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: ["#F7D154", "#EC4C47", "#1070CA"],
      borderColor: ["#F7D154", "#EC4C47", "#1070CA"],
      borderWidth: 1,
      offset: 1,
    },
  ],
};
const options: any = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      enabled: true,
    },
  },
  cutout: "90%",
};

function CircleChart() {
  return (
    <div>
      <div style={{ width: "300px", height: "400px" }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default CircleChart;
