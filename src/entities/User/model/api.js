import { apiClient } from "@/shared/api/apiClient";

export async function searchUserByUsername(username) {
  const normalizedUsername = username?.trim().toLowerCase();
  if (!normalizedUsername) return null;

  try {
    return await apiClient.get(`/users/${normalizedUsername}`);
  } catch (error) {
    if (error.response?.status === 404) return null;
    throw error;
  }
}

export async function getUserRepos(username) {
  const normalizedUsername = username?.trim().toLowerCase();
  if (!normalizedUsername) return [];

  try {
    return await apiClient.get(`/users/${normalizedUsername}/repos`, {
      params: {
        per_page: 4,
      },
    });
  } catch (error) {
    console.error("Failed to fetch repos:", error);
    return [];
  }
}

export async function getAllUserRepos(username) {
  const normalizedUsername = username?.trim().toLowerCase();
  if (!normalizedUsername) return [];

  let allRepos = [];
  let page = 1;
  const PER_PAGE = 30;

  while (true) {
    try {
      const repos = await apiClient.get(`/users/${normalizedUsername}/repos`, {
        params: {
          per_page: PER_PAGE,
          page: page,
        },
      });

      if (repos.length === 0) break;

      allRepos = [...allRepos, ...repos];
      page++;

      if (repos.length < PER_PAGE) break;
    } catch (error) {
      console.error("Failed to fetch all repos:", error);
      break;
    }
  }

  return allRepos;
}
