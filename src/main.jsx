
import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Pages/Login";
import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Login />
  </BrowserRouter>
);

