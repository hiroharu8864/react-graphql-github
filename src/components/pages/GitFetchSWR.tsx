import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getLoginUserSWR } from "../hooks/getLoginUserSWR";

export const GitFetchSWR: FC = memo(() => {
  const navigate = useNavigate();
  const onClickGitFetchSWR = useCallback(() => {
    navigate("/gitfetchswr");
  }, [navigate]);

  const { data } = getLoginUserSWR();
  console.log(data);

  return (
    <>
      <p>GraphQL client Check</p>
      <p>{data?.data.viewer.id}</p>
      <p>{data?.data.viewer.login}</p>
      <p>{data?.data.viewer.url}</p>
      <button onClick={onClickGitFetchSWR}>Get Git Login User</button>
    </>
  );
});
