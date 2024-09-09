import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";
import Navbar from "./components/Navbar/Navbar";
import Outlet from "./components/Outlet/Outlet";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Loading from "./components/Loading/Loading";

// Lazy load components
const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  // console.log(import.meta.env.VITE_BASE_URL);

  return (
    <>
      <Router>
        <Suspense
          fallback={
            <div className="text-3xl dark:bg-darkBg bg-white text-darkBg dark:text-white">
              Loading
            </div>
          }
        >
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/"
              element={
                <PrivateRoute
                  element={
                    <Outlet>
                      <Home />
                    </Outlet>
                  }
                ></PrivateRoute>
              }
            ></Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
