import useSWR from "swr";

const query = `
query { 
  viewer {
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

export const getLoginUserSWR = () => {
  const fetcher = async (): Promise<any> => {
    const access_token = "ghp_token";
    const response = await fetch("https://api.github.com/graphql", {
      body: JSON.stringify({ query }),
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
  return { data, error };
};
