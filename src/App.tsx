import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Outlet from "./components/Outlet/Outlet";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import VerifyReset from "./pages/VerifyReset/VerifyReset";

const Home = lazy(() => import("./pages/Home/Home"));

const SignIn = lazy(() => import("./pages/SignIn/SignIn"));
const Register = lazy(() => import("./pages/Register/Register"));

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/verifyreset" element={<VerifyReset />} />
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
