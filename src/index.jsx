import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./Styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as P from "./Pages";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<P.LoginPage />} />
      <Route path="/mainpage" element={<P.MainPage />} />
    </Routes>
  </Router>
);
