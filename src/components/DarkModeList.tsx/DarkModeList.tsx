import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { useEffect, useState } from "react";

interface mode {
  name: string;
  code: string;
}

export let citySelected: string | undefined = "light";
const mySystemMode: boolean = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

function DarkModeList() {
  const mode: mode[] = [
    { name: "☀️", code: "light" },
    { name: "🌙", code: "selector" }, // dark
    { name: "🖥️", code: "media" }, // system
  ];
  const [selectedCity, setSelectedCity] = useState<mode | null>(mode[0]);

  useEffect(() => {
    citySelected = selectedCity?.code;

    function darkModeHandler() {
      if (citySelected === "light") {
        document.documentElement.classList.remove("dark");
      } else if (citySelected === "selector") {
        document.documentElement.classList.add("dark");
      } else if (citySelected === "media") {
        if (mySystemMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    }

    darkModeHandler();
  }, [selectedCity]);

  return (
    <div>
      <div className="card flex justify-content-center">
        <Dropdown
          value={selectedCity}
          onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)}
          options={mode}
          optionLabel="name"
          placeholder={"☀️"}
          className="w-10 md:w-14rem border"
        />
      </div>
    </div>
  );
}

export default DarkModeList;

// append changes into the tailwind configration
