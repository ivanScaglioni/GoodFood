import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { FoodMenuContextProvider } from "./context/FoodMenuContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FoodMenuContextProvider>
      <App />
    </FoodMenuContextProvider>
  </React.StrictMode>
);
