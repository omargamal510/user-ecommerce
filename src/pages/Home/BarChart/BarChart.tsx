// BarChart.tsx
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components you need
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: "#1665D8",
      borderColor: "#1665D8",
      borderWidth: 1,
      barThickness: 10,
    },

    {
      label: "My Second Dataset",
      data: [45, 39, 60, 71, 46, 35, 30],
      backgroundColor: "#FF6384",
      borderColor: "#FF6384",
      borderWidth: 1,
      barThickness: 10,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: {
      stacked: false,
      barPercentage: 0,
      categoryPercentage: 0.6,
    },
    y: {
      beginAtZero: true,
    },
  },
};

const windowWidth: number = window.innerWidth;

const isTrue: boolean = windowWidth <= 400;

function BarChart() {
  return (
    <div className="  md:w-full md:h-full">
      <Bar data={data} options={options} height={isTrue ? 250 : 0} />
    </div>
  );
}

export default BarChart;
