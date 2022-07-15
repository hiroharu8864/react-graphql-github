import useSWR from "swr";
import { request } from "graphql-request";

export const useAllUsersSWR = () => {
  const fetcher = async (url: string): Promise<boolean | null> => {
    const resonse = await fetch(url);
    return resonse.json();
  };

  const { data, error } = useSWR("https://api.github.com/graphql", fetcher);
  return { data, error };
};
