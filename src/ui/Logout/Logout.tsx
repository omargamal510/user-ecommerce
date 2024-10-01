import { removeCookie } from "../../components/CookieHandler/CookieHandler";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/authSlice";

function Logout() {
  const dispatch = useDispatch();

  function handleLogout() {
    removeCookie("user-token");
    localStorage.removeItem("userName");
    dispatch(logOut());
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
