import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const GitFetchCheck: FC = memo(() => {
  const navigate = useNavigate();
  const onClickGitFetchCheck = useCallback(() => {
    navigate("/gitfetch");
  }, [navigate]);
  return (
    <>
      <p>GraphQL client Check</p>
      <button onClick={onClickGitFetchCheck}>Get GraphQL query</button>
    </>
  );
});
