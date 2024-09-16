import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Outlet from "./components/Outlet/Outlet";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const Home = lazy(() => import("./pages/Home/Home"));

const SignIn = lazy(() => import("./pages/SignIn/SignIn"));
const Register = lazy(() => import("./pages/SignIn/SignIn"));

function App() {
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
