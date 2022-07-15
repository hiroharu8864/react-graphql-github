import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { FetchCheck } from "../components/pages/FetchCheck";
import { GitFetchCheck } from "../components/pages/GitFetchCheck";
import { GitFetchSWR } from "../components/pages/GitFetchSWR";

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetch" element={<FetchCheck />} />
        <Route path="/gitfetch" element={<GitFetchCheck />} />
        <Route path="/gitfetchswr" element={<GitFetchSWR />} />
      </Routes>
    </BrowserRouter>
  );
});
