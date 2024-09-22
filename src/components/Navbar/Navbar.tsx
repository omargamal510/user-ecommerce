import { useContext } from "react";
import DarkModeList from "../DarkModeList.tsx/DarkModeList";
import TokenContext from "../../contexts/TokenContext";

function Navbar() {
  const { userName } = useContext(TokenContext);

  return (
    <nav className=" h-16 w-full shadow-custom bg-white dark:bg-darkBg">
      <div className="custom-container h-full flex items-center justify-between">
        <div className="dark:text-white">Welcome, {userName} ❤️</div>
        <ul className="flex gap-4 items-center">
          <DarkModeList />
          <li className="cursor-pointer w-10 h-10">
            <img src="avatar.png" className="w-full" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
