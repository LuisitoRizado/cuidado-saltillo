import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./customComponents/Navbar";
import { Provider } from "react-redux";
import { store } from "./store/index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster />
      <BrowserRouter>
        <Navbar />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
