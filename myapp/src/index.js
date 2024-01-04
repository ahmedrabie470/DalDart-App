import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ErrorBoundary>

        <App />
    </ErrorBoundary>
);
