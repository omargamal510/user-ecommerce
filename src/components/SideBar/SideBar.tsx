import { NavLink } from "react-router-dom";
import Logout from "../../ui/Logout/Logout";

function SideBar() {
  return (
    <div className="h-full mt-16 bg-neutral/900 w-72 dark:bg-dark2Bg dark:shadow-custom-dark fixed left-0 mr-72  hidden md:block">
      <div className="side-bar-container">
        <div className="top-section flex flex-col items-center justify-center py-5 border-b border-[#1F2937] dark:border-white">
          <h2 className="text-white text-xl">User E-commerce</h2>
          {/* <p className="text-sm">Manage it easier now !</p> */}
        </div>

        <div className="Links px-5 flex flex-col gap-1 mt-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `w-full block py-2 rounded-lg px-3 ${
                isActive
                  ? "bg-activeNavLink text-secondaryMain dark:bg-textPrimary dark:text-white"
                  : "text-white"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `w-full block py-2 rounded-lg px-3 ${
                isActive
                  ? "bg-activeNavLink text-secondaryMain dark:bg-textPrimary dark:text-white"
                  : "text-white"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="brands"
            className={({ isActive }) =>
              `w-full block py-2 rounded-lg px-3 ${
                isActive
                  ? "bg-activeNavLink text-secondaryMain dark:bg-textPrimary dark:text-white"
                  : "text-white"
              }`
            }
          >
            Brands
          </NavLink>

          <NavLink
            to="/"
            className="text-white w-full block py-2 rounded-lg px-3 
           "
          >
            <Logout />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
