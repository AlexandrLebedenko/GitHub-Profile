import { useState, useEffect } from "react";
import { searchUserByUsername } from "@/entities/User/model/api";

export function useUserSearchBar() {
  const [query, setQuery] = useState(""); // What the user entered
  const [user, setUser] = useState(null); // Found user
  const [isLoading, setIsLoading] = useState(false); // Loading?
  const [notFound, setNotFound] = useState(false); // Not found?

  useEffect(() => {
    // Start the search
    const search = async () => {
      setIsLoading(true);
      setNotFound(false);
      try {
        const result = await searchUserByUsername(query);

        if (result) {
          setUser(result); // Found the user
          setNotFound(false);
        } else {
          setUser(null); // Not found
          setNotFound(true);
        }
      } finally {
        setIsLoading(false);
      }
    };
    search();
  }, [query]);
  return {
    query,
    setQuery,
    user,
    isLoading,
    notFound,
  };
}
