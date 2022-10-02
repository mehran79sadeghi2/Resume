import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import renderRoutes from "./routes";
import "./index.css";
import CssVariables from "./views/shared-components/CssVariables";

function Index() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        {renderRoutes()}
        <CssVariables />
      </BrowserRouter>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
