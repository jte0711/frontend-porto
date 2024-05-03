import { githubUrl } from "@constant/url";
import axios from "axios";

/**
 * TODO:
 * - make interceptor that intercept error
 */

const api = axios.create({
  baseURL: githubUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
