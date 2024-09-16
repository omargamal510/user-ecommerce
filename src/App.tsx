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
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />

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
