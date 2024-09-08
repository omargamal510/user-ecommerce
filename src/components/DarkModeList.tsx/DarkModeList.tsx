import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { useEffect, useState } from "react";

interface Mode {
  name: string;
  code: string;
}

export let citySelected: string | undefined = "light";
const mySystemMode: boolean = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

function DarkModeList() {
  const modes: Mode[] = [
    { name: "☀️", code: "light" },
    { name: "🌙", code: "dark" }, // dark
    { name: "🖥️", code: "system" }, // system
  ];

  // Check localStorage for saved theme or default to light
  const initialTheme = localStorage.getItem("appTheme") || "light";
  const [selectedTheme, setSelectedTheme] = useState<Mode | null>(
    modes.find((m) => m.code === initialTheme) || modes[0]
  );

  // Save theme to localStorage and apply the dark mode class
  useEffect(() => {
    citySelected = selectedTheme?.code;

    function darkModeHandler() {
      if (citySelected === "light") {
        document.documentElement.classList.remove("dark");
      } else if (citySelected === "dark") {
        document.documentElement.classList.add("dark");
      } else if (citySelected === "system") {
        if (mySystemMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    }

    localStorage.setItem("appTheme", selectedTheme?.code || "light");
    darkModeHandler();
  }, [selectedTheme]);

  return (
    <div>
      <div className="card flex justify-content-center">
        <Dropdown
          value={selectedTheme}
          onChange={(e: DropdownChangeEvent) => {
            const selectedMode = modes.find((m) => m.code === e.value.code);
            setSelectedTheme(selectedMode || modes[0]);
          }}
          options={modes}
          optionLabel="name"
          placeholder={"☀️"}
          className="w-10 md:w-14rem border bg-white dark:bg-gray-800 dark:border-textSecondary"
        />
      </div>
    </div>
  );
}

export default DarkModeList;
