export const getLoginUser = async (): Promise<any> => {
  const access_token = "ghp_token";

  /**
   * 発行クエリ
   * query loginUserQuery($loginUser: String!){
   *  user(login: $loginUser){
   *    login
   *   }
   * }
   *
   * {"loginUser": "hiroharu8864"}
   */
  const { response } = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${access_token}`,
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
  });
  return response;
};
