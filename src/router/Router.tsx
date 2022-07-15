import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { FetchCheck } from "../components/pages/FetchCheck";
import { GitFetchCheck } from "../components/pages/GitFetchCheck";

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetch" element={<FetchCheck />} />
        <Route path="/gitfetch" element={<GitFetchCheck />} />
      </Routes>
    </BrowserRouter>
  );
});
