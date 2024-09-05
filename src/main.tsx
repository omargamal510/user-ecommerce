import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./style.scss";
import { TokenContextProvider } from "./contexts/TokenContext.tsx";
import "primereact/resources/themes/saga-blue/theme.css"; // or another theme

createRoot(document.getElementById("root")!).render(
  <TokenContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </TokenContextProvider>
);
