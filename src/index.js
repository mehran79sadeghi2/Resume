import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import renderRoutes from "./routes";
import "./index.css";
import CssVariables from "./views/shared-components/CssVariables";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {renderRoutes()}
      <CssVariables />
    </BrowserRouter>
  </React.StrictMode>
);
