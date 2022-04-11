import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ReactRoot = document.getElementById("root");
const root = createRoot(ReactRoot);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
