import { useSelector } from "react-redux";
import DarkModeList from "../DarkModeList.tsx/DarkModeList";

function Navbar() {
  const userName = JSON.parse(
    useSelector((store: any) => store.auth.userNameValue)
  );

  return (
    <nav className="h-16 w-full z-50 shadow-custom fixed right-0 bg-white dark:bg-darkBg">
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
