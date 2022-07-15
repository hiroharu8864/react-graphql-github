import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { getLoginUser } from "../hooks/getLoginUser";

export const FetchCheck: FC = memo(() => {
  const { response } = getLoginUser();
  console.log(response);

  const navigate = useNavigate();
  const onClickFetchCheck = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <>
      <p>SWR FetchCheck</p>
      <button></button>
      <button onClick={onClickFetchCheck}>back to home</button>
    </>
  );
});
