import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const Home: FC = memo(() => {
  const navigate = useNavigate();
  const onClickFetchCheck = useCallback(() => {
    navigate("/fetch");
  }, [navigate]);
  const onClickGitFetchCheck = useCallback(() => {
    navigate("/gitfetch");
  }, [navigate]);
  const onClickGitFetchSWR = useCallback(() => {
    navigate("/gitfetchswr");
  }, [navigate]);

  return (
    <>
      <p>GraphQL client Check</p>
      <button onClick={onClickFetchCheck}>Get GraphQL query</button>
      <button onClick={onClickGitFetchCheck}>Get Git Login User</button>
      <button onClick={onClickGitFetchSWR}>Get Git Login User via SWR</button>
    </>
  );
});
