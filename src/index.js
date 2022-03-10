import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./state/store";
import { Provider } from "react-redux";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Tables from "./components/Tables";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/tables" element={<Tables />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
