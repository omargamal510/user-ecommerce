import { useContext } from "react";
import DarkModeList from "../DarkModeList.tsx/DarkModeList";
import TokenContext from "../../contexts/TokenContext";
import { removeCookie } from "../CookieHandler/CookieHandler";

function Navbar() {
  const { setToken } = useContext(TokenContext);

  function handleLogout() {
    setToken("");
    removeCookie("user-token");
  }

  return (
    <nav className=" h-16 w-full py-3 px-7 flex justify-between shadow-custom bg-white items-center">
      <button onClick={() => handleLogout()} className="bg-red">
        Logout {"❌"}
      </button>
      <ul className="flex gap-4 items-center">
        <DarkModeList />
        <li className="cursor-pointer w-10 h-10">
          <img src="avatar.png" className="w-full" />
        </li>
        {/* Later we will make it routable to the profile data */}
      </ul>
    </nav>
  );
}

export default Navbar;
