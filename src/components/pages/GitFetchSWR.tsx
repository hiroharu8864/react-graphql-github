import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getLoginUserSWR } from "../hooks/getLoginUserSWR";
import { getLoginUserSWRNew } from "../hooks/getLoginUserSWRNew";
import { getLoginUserSWRWithVal } from "../hooks/getLoginUserSWRWithVal";

export const GitFetchSWR: FC = memo(() => {
  const navigate = useNavigate();
  const onClickGitFetchSWR = useCallback(() => {
    navigate("/gitfetchswr");
  }, [navigate]);

  // const { data } = getLoginUserSWRWithVal();
  // const { data } = getLoginUserSWR();
  const { data } = getLoginUserSWRNew();
  console.log(data);

  return (
    <>
      <h2>GraphQL API Response</h2>
      <p>{data?.user.id}</p>
      <p>{data?.user.login}</p>
      <p>{data?.user.url}</p>
      <button onClick={onClickGitFetchSWR}>Get Git Login User</button>
    </>
  );
});
