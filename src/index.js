import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/layout";

import "./styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
