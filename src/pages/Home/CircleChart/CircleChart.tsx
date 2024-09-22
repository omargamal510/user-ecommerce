import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { DeviceData, DeviceDataType } from "../../../types/home";
``;
ChartJS.register(ArcElement, Tooltip, Legend);

const devicesData: DeviceDataType = [
  {
    imgSrc: "desktop.png",
    title: "desktop",
    percentage: 63,
    color: "#1070CA",
  },

  {
    imgSrc: "tablet.png",
    title: "tablet",
    percentage: 15,
    color: "#EC4C47",
  },

  {
    imgSrc: "mobile.png",
    title: "mobile",
    percentage: 22,
    color: "#F7D154",
  },
];

const devicesDataPercetage: number[] = devicesData.map((d) => d.percentage);
const deviceDataColors: string[] = devicesData.map((d) => d.color);

const data = {
  datasets: [
    {
      label: "Num of Devices",
      data: devicesDataPercetage,
      backgroundColor: deviceDataColors,
      borderColor: deviceDataColors,
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
  cutout: "85%",
};

function CircleChart() {
  return (
    <div className="rounded-lg bg-white dark:bg-darkBg3 pb-7 h-full">
      <div className="flex justify-center flex-col items-center gap-4 ">
        <h2 className="py-8 px-6 font-bold self-start border-b dark:border-darkBg w-full">
          Traffic by device
        </h2>

        <div className="w-40 h-48 lg:w-60 lg:h-60">
          <Doughnut data={data} options={options} />
        </div>

        <div className="devices flex gap-5 justify-center">
          {devicesData.map((d: DeviceData, i: number) => (
            <section
              className="flex flex-col gap-1 justify-center items-center"
              key={i}
            >
              <img src={d.imgSrc} alt={`${d.title} icon`} />
              <p>{d.title}</p>
              <p style={{ color: d.color }} className="text-3xl font-bold">
                {d.percentage}%
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CircleChart;
