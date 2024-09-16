import { CSSProperties } from "react";
import BeatLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

function Spinner() {
  return (
    <div>
      <BeatLoader
        color={"#FFF"}
        loading={true}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
