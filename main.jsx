import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import UserStore from "./reduxcrud/UserStore.js";
import Rtkstore from "./RtkCrud/Rtkstore.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={UserStore}> */}
    <Provider store={Rtkstore}>
      <App />
    </Provider>
    {/* </Provider> */}
  </StrictMode>
);
