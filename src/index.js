import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Router from "./router/Routes";

import "./index.css";
import MayinLayout from "./components/Layouts";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <MayinLayout>
      <Router />
    </MayinLayout>
  </BrowserRouter>
);
