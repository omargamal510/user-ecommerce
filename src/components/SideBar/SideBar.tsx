import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="h-full bg-neutral/900 w-72 dark:bg-dark2Bg dark:shadow-custom-dark rounded-tl-md rounded-tr-md hidden md:block">
      <div className="side-bar-container">
        <div className="top-section flex flex-col items-center justify-center py-5 border-b border-[#1F2937] dark:border-white">
          <h2 className="text-white text-xl">User E-commerce</h2>
          {/* <p className="text-sm">Manage it easier now !</p> */}
        </div>

        <div className="Links px-5 flex flex-col gap-1 mt-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-neutral-300 w-full block py-2 rounded-lg px-3 ${
                isActive
                  ? "bg-activeNavLink text-secondaryMain dark:bg-textPrimary dark:text-white"
                  : ""
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `text-neutral-300 w-full block py-2 rounded-lg px-3 ${
                isActive ? "bg-activeNavLink text-secondaryMain" : ""
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="brands"
            className={({ isActive }) =>
              `text-neutral-300 w-full block py-2 rounded-lg px-3 ${
                isActive ? "bg-activeNavLink text-secondaryMain" : ""
              }`
            }
          >
            Brands
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
