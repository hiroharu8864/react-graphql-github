import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const GitFetchCheck: FC = memo(() => {
  const checkGraphQLClick = () => {
    try {
      fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: "bearer ghp_token",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: `
            query loginUserQuery(
              $loginUser: String!
              ) { 
              user(login: $loginUser){
                login
              }
            }
            `,
          variables: { loginUser: "hiroharu8864" }
        })
      }).then((response) => {
        console.log(response);
        return response.json();
      });
    } catch (error) {
      alert(error);
    }
  };

  const navigate = useNavigate();
  const onClickGitFetchCheck = useCallback(() => {
    navigate("/gitfetch");
  }, [navigate]);
  return (
    <>
      <p>GraphQL client Check</p>
      <button onClick={checkGraphQLClick}>Check</button>
      <button onClick={onClickGitFetchCheck}>Get GraphQL query</button>
    </>
  );
});
