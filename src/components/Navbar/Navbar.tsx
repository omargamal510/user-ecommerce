import DarkModeList from "../DarkModeList.tsx/DarkModeList";

function Navbar() {
  return (
    <nav className=" h-16 w-full py-3 px-6 flex justify-between items-center">
      <button className="bg-red">Logout {"❌"}</button>
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
