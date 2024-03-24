import ReactDOM from "react-dom/client";
import "./i18n";
import "./index.css";
import Portfolio from "./pages/Home";
import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <>
    <Portfolio />
    <SpeedInsights />
  </>
  // </React.StrictMode>
);
