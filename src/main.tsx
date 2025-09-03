import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import "./utils/i18n";
import { QueryClient, QueryClientProvider } from "react-query";
import { LoadingProvider } from "./components/loading/Loader.tsx";
import { ModalProvider } from "./components/modal/Modal.tsx";
import "./../src/services/axiosInterceptor.ts";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <ModalProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </ModalProvider>
      </LoadingProvider>
    </BrowserRouter>
  </StrictMode>
);
