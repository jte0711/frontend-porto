import useSWR from "swr";
import api from "./api";
import { GitHubUser, GitHubUserSchema } from "schemas/githubSchema";

export const useGitHub = (username: string) => {
  const url = `users/${username ? username : "octocat"}`;
  const { data, error, isLoading, isValidating, mutate } = useSWR<{
    data: GitHubUser;
  }>(url, api.get, {
    revalidateIfStale: true,
    revalidateOnMount: true,
    shouldRetryOnError: false,
  });

  const result: GitHubUser =
    isLoading || error
      ? {
          login: "octocat",
          name: "The Octocat",
          bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
          public_repos: 7,
          followers: 3939,
          following: 9,
          location: "San Fransisco",
          blog: "https://github.blog",
          company: "@github",
          twitter_username: "",
          avatar_url: "/octocat.png",
          created_at: "2024-06-15T03:24:00",
        }
      : GitHubUserSchema.parse(data?.data);

  return {
    data: result,
    error,
    isLoading,
    isValidating,
    mutate,
  };
};
