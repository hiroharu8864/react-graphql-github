import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { FetchCheck } from "../components/pages/FetchCheck";

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetch" element={<FetchCheck />} />
      </Routes>
    </BrowserRouter>
  );
});
