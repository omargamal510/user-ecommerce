import { NumStateObjectArray } from "../../types/home";
import CircleChart from "./CircleChart/CircleChart";
import NumState from "./NumState/NumState";

const NumStateData: NumStateObjectArray = [
  {
    title: "Products",
    mainTitle: "450",
    imgSrc: "products-avatar.png",
  },

  {
    title: "Total Customers",
    mainTitle: "1,6k",
    imgSrc: "users-avatar.png",
  },

  {
    title: "Brands Success",
    mainTitle: "75.5%",
    imgSrc: "stat-avatar.png",
  },

  {
    title: "Total Profits",
    mainTitle: "$23K",
    imgSrc: "money-avatar.png",
  },
];

function Home() {
  return (
    <>
      <div className=" w-full">
        <div className="home-container custom-container flex flex-col gap-6 mt-6">
          {/* <div className="num-stats-container  flex gap-3 w-full p-5"> */}

          <div className="grid grid-cols-12 gap-4 justify-center  ">
            {NumStateData.map((s, index) => (
              <NumState
                title={s.title}
                mainTitle={s.mainTitle}
                imgSrc={s.imgSrc}
                key={index}
              />
            ))}
          </div>

          <div className="charts grid grid-cols-12 gap-4 justify-center">
            <div className="col-span-3">
              <CircleChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
