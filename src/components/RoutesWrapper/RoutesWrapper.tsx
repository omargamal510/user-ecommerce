import { Route, Routes, useLocation, Location } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NotFound from "../../pages/NotFound/NotFound";

import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import VerifyReset from "../../pages/VerifyReset/VerifyReset";
import { lazy, LazyExoticComponent } from "react";
import Layout from "../Layout/Layout";

const Home: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/Home/Home")
);
const SignIn: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/SignIn/SignIn")
);
const Register: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/Register/Register")
);
const Products: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/Products/Products")
);

function RoutesWrapper() {
  const location: Location<any> = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/verifyreset" element={<VerifyReset />} />
      <Route path="/signin" element={<SignIn />} />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout></Layout>
          </PrivateRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesWrapper;
