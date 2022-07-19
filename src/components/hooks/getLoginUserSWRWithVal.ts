import useSWR from "swr";

const variables = { loginUser: "hiroharu8864" };
const query = `
query loginUserQuery(
  $loginUser: String!
  ) { 
  user(login: $loginUser){
    id
    login
    url
  }
}
`;

export type GitHubData = {
  data: Data;
};
export type Data = {
  viewer: Viewer;
};
export type Viewer = {
  id: string;
  login: string;
  url: string;
};

export const getLoginUserSWRWithVal = () => {
  const fetcher = async (query, variables): Promise<any> => {
    console.log(query, variables);
    const access_token = "ghp_token";

    const response = await fetch("https://api.github.com/graphql", {
      body: JSON.stringify({
        query: { query },
        variables: { variables }
      }),
      headers: {
        Authorization: `bearer ${access_token}`,
        "Content-Type": "application/json"
      },
      method: "POST"
    });
    return response.json();
  };

  const { data, error } = useSWR<GitHubData>([query], fetcher, {
    suspense: true
  });
  console.log(data, error);
  return { data, error };
};
