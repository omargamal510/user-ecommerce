import { lazy, useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";
import Navbar from "./components/Navbar/Navbar";
import Outlet from "./components/Outlet/Outlet";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import TokenContext from "./contexts/TokenContext";
import useAuth from "./hooks/useAuth";

// Lazy load components

interface CountContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  // console.log(import.meta.env.VITE_BASE_URL);

  // let x: any = (document.cookie =
  //   "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmFhNjRiMzk5NDYzMjE3NjEyMWZmZSIsIm5hbWUiOiJBaG1lZCBBYmQgQWwtTXV0aSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjc4MjMyOTMxLCJleHAiOjE2ODYwMDg5MzF9.xn9aRihrI7eJQYgJSHgQMKDK2pcu8Ii_0_8xMV6K7hk; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/");

  // const [cookie, setCookie] = useState<string>(x);

  // let cookieSplit = cookie.split(";");
  // let cookieSplit2 = cookieSplit[0].split("=");
  // console.log("token : ", cookieSplit2[1]);

  const { token } = useContext(TokenContext);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    console.log(token);
  }, [token]);

  // console.log(isAuthenticated);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />

          {/* <Route
            path="/"
            element={
                element={
                  <Outlet>
                    <Home />
                  </Outlet>
                }
            }
          ></Route> */}

          <Route
            path="/"
            element={
              <PrivateRoute>
                <Outlet>
                  <Home />
                </Outlet>
              </PrivateRoute>
            }
          ></Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
