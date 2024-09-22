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
      barThickness: 5, // Adjust this value to control thickness
    },
    {
      label: "My Second Dataset",
      data: [45, 39, 60, 71, 46, 35, 30],
      backgroundColor: "#FF6384",
      borderColor: "#FF6384",
      borderWidth: 1,
      barThickness: 5, // Adjust this value to control thickness
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: {
      stacked: false,
      barPercentage: 0.2, // Adjusts the width of each bar
      categoryPercentage: 0.2, // Adjusts the spacing between categories
    },
    y: {
      beginAtZero: true,
    },
  },
};

function BarChart() {
  return (
    <div className="text-center w-full">
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
