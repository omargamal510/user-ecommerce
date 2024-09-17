import { NumStateObjectArray } from "../../types/home";
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
        <div className="home-container">
          {/* <div className="num-stats-container  flex gap-3 w-full p-5"> */}

          <div className="grid grid-cols-12 gap-4 p-5">
            {NumStateData.map((s, index) => (
              <NumState
                title={s.title}
                mainTitle={s.mainTitle}
                imgSrc={s.imgSrc}
                key={index}
              />
            ))}
          </div>

          {/* <div className="grid grid-cols-12 gap-4">
            <div className="bg-blue-200 p-4 col-span-3">Row 1</div>
            <div className="bg-blue-300 p-4">Row 2</div>
            <div className="bg-blue-400 p-4">Row 3</div>
            <div className="bg-blue-500 p-4">Row 4</div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
