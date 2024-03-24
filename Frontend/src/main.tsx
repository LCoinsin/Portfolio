import ReactDOM from "react-dom/client";
import "./i18n";
import "./index.css";
import Portfolio from "./pages/Home";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Portfolio />
    <Analytics />
    <SpeedInsights />
  </>
);
