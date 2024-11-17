import { BrowserRouter as Router } from "react-router-dom";
import RoutesWrapper from "./components/RoutesWrapper/RoutesWrapper";
function App() {
  return (
    <>
      {/* Update the router inside here don't forget */}
      <Router>
        <RoutesWrapper />
      </Router>
    </>
  );
}

export default App;
