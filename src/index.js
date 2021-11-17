import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AppMemo from "./AppMemo";
import AppRockScissorsPaper from "./AppRockScissorsPaper";
import AppRussianRoulette from "./AppRussianRoulette";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/memo" element={<AppMemo />} />
      <Route path="/rock-scissors-paper" element={<AppRockScissorsPaper />} />
      <Route path="/russian-roulette" element={<AppRussianRoulette />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
