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

function App() {
  // console.log(import.meta.env.VITE_BASE_URL);

  return (
    <>
      <Register />

      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
