import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { I18nProvider } from "react-aria-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nProvider locale="en-PL">
      <App />
    </I18nProvider>
  </React.StrictMode>
);
