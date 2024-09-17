import { useContext } from "react";
import { removeCookie } from "../../components/CookieHandler/CookieHandler";
import TokenContext from "../../contexts/TokenContext";

function Logout() {
  const { setToken } = useContext(TokenContext);

  function handleLogout() {
    setToken("");
    removeCookie("user-token");
  }

  return (
    <div>
      <button onClick={() => handleLogout()} className=" w-full text-left">
        Logout
      </button>
    </div>
  );
}

export default Logout;
