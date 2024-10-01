import { BrowserRouter as Router } from "react-router-dom";
import RoutesWrapper from "./components/RoutesWrapper/RoutesWrapper";
import Counter from "./store/Counter";
import { useSelector } from "react-redux";

function App() {
  // const tokenVal = useSelector((store: any) => store.token.value);
  // console.log(tokenVal);

  return (
    <>
      {/* <div>Token : {tokenVal}</div> */}
      <Counter />
      <Router>
        <RoutesWrapper />
      </Router>
    </>
  );
}

export default App;
