import { CSSProperties, useEffect, useState } from "react";
import { CircleLoader, ClipLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const mySystemMode: boolean = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

function Loading() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const handleThemeChange = () => {
      const theme: string | null = localStorage.getItem("appTheme");

      if (theme === "dark") {
        setIsDark(true);
      } else if (theme === "system") {
        if (mySystemMode) {
          setIsDark(true);
        } else {
          setIsDark(false);
        }
      } else {
        setIsDark(false);
      }
    };

    handleThemeChange();
  }, []);

  return (
    <div className="h-screen bg-mainWhite flex justify-center items-center dark:bg-black">
      {/* <ClipLoader
        color={isDark ? "#FFF" : "#1e1e2d"}
        loading={true}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
      Hello
    </div>
  );
}

export default Loading;
