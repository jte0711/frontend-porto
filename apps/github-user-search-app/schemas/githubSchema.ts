import { z } from "zod";

/**
 * Note:
 * - For complete schema, refer to: https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28
 */

export const GitHubUserSchema = z.object({
  avatar_url: z.string(), // Avatar
  bio: z.string().nullable(),
  blog: z.string().nullable(), // Website
  company: z.string().nullable(),
  name: z.string().nullable(),
  login: z.string().nullable(), // Username
  created_at: z.string().datetime(), // Joined
  public_repos: z.number(), // Repo Count
  followers: z.number(), // Followers Count
  following: z.number(), // Following count
  location: z.string().nullable(),
  twitter_username: z.string().nullable(), // Twitter
});

export type GitHubUser = z.infer<typeof GitHubUserSchema>;
