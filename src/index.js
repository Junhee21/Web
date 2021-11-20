import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import MemoPage from "./pages/MemoPage";
import RockScissorsPaperPage from "./pages/RockScissorsPaperPage";
import RussianRoulettePage from "./pages/RussianRoulettePage";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/memo" element={<MemoPage />} />
      <Route path="/rock-scissors-paper" element={<RockScissorsPaperPage />} />
      <Route path="/russian-roulette" element={<RussianRoulettePage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
