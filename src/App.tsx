import { BrowserRouter as Router } from "react-router-dom";
import RoutesWrapper from "./components/RoutesWrapper/RoutesWrapper";
function App() {
  return (
    <>
      <Router>
        <RoutesWrapper />
      </Router>
    </>
  );
}

export default App;
