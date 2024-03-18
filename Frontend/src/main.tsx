import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Portfolio from "./pages/Home";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);