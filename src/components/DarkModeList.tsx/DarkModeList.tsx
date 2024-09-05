import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { useState } from "react";

interface mode {
  name: string;
  code: string;
}
function DarkModeList() {
  const [selectedCity, setSelectedCity] = useState<mode | null>(null);
  const mode: mode[] = [
    { name: "☀️", code: "light" },
    { name: "🌙", code: "selector" }, // dark
    { name: "🖥️", code: "media" }, // system
  ];

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
