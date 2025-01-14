import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import React
// im from "react";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// const title = "React";

// ReactDOM.createRoot(
//   document.getElementById("root").render(<h1>Hello {title}</h1>)
// );
