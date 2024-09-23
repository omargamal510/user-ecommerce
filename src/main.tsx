import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./style.scss";
import { TokenContextProvider } from "./contexts/TokenContext.tsx";
import "primereact/resources/themes/saga-blue/theme.css"; // or another theme
import Nothing from "./components/Nothing/Nothing.tsx";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => toast.error(`Something went wrong: ${error.message}`),
  }),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TokenContextProvider>
        <Suspense fallback={<Nothing />}>
          <App />
        </Suspense>
      </TokenContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
