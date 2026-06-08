import { apiClient } from "@/shared/api/apiClient";

export async function searchUserByUsername(username) {
  const normalizedUsername = username.trim().toLowerCase();
  if (!normalizedUsername || normalizedUsername === "") {
    return null;
  }
  try {
    // Make a request to GitHub API
    const user = await apiClient.get(`/users/${normalizedUsername}`);
    // Return user data
    return user;
  } catch (error) {
    if (error.response?.status === 404) {
      return null;
    }
  }
}

export async function getUserRepos(username) {
  const normalizedUsername = username.trim().toLowerCase();
  if (!normalizedUsername) return [];
  try {
    const repos = await apiClient.get(`/users/${normalizedUsername}/repos`, {
      params: {
        per_page: 4,
      },
    });
    return repos;
  } catch (error) {
    return [];
  }
}
