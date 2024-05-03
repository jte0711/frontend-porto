import useSWR from "swr";
import api from "./api";
import { GitHubUser, GitHubUserSchema } from "schemas/githubSchema";

export const useGitHub = () => {
  const { data, error, isLoading, isValidating, mutate } = useSWR<{
    data: GitHubUser;
  }>("users/octocat", api.get, {
    revalidateIfStale: true,
    revalidateOnMount: true,
  });
  const result = isLoading ? {} : GitHubUserSchema.parse(data?.data);

  return {
    data: result,
    error,
    isLoading,
    isValidating,
    mutate,
  };
};
