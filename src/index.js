import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GithubProvider } from "./context/github/GithubContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GithubProvider>
        <App />
      </GithubProvider>
    </BrowserRouter>
  </React.StrictMode>
);
