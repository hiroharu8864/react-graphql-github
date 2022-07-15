export const getLoginUser = async (): Promise<any> => {
  const access_token = "token";

  const { response } = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${access_token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `
      query { 
        viewer { 
          login
        }
      }
      `,
      variables: {}
    })
  });
  console.log(response);
  return response.json();
};
