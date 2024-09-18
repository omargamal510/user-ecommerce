import { BrowserRouter as Router } from "react-router-dom";
import RoutesWrapper from "./components/RoutesWrapper/RoutesWrapper";
import CircleChart from "./pages/Home/CircleChart/CircleChart";

function App() {
  return (
    <>
      <CircleChart />

      <Router>
        <RoutesWrapper />
      </Router>
    </>
  );
}

export default App;
