import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const FetchCheck: FC = memo(() => {
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
