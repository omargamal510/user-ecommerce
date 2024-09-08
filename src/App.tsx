// interface Person<TName, TAge, TMarried> {
//   name: TName;
//   age: TAge;
//   married: TMarried;
// }

// const x: Person<string, number, boolean> = {
//   name: "Omar",
//   age: 25,
//   married: true,
// };

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";
import Navbar from "./components/Navbar/Navbar";
import Outlet from "./components/Outlet/Outlet";
import NotFound from "./pages/NotFound/NotFound";
/*
  Client ID : 865740099015-lls5ag00i966a7prmeg70hvr4kne1tm0.apps.googleusercontent.com
*/

function App() {
  // console.log(import.meta.env.VITE_BASE_URL);

  return (
    <>
      {/* <Register /> */}
      {/* 
      <SignIn /> */}

      {/* <Outlet /> */}
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<Outlet></Outlet>}></Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
