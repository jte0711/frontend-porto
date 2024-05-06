import { authToken } from "@constant/env";
import { githubUrl } from "@constant/url";
import axios from "axios";

const api = axios.create({
  baseURL: githubUrl,
  headers: {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    Authorization: "Bearer " + authToken,
  },
});

export default api;
