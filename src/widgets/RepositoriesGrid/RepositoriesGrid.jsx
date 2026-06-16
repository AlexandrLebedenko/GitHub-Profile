import { useState } from "react";
import styles from "./RepositoriesGrid.module.scss";
import RepositoryCard from "@/entities/Repository/ui/RepositoryCard";
import { getAllUserRepos } from "@/entities/User/model/api";

function RepositoriesGrid({ repositories = [], username }) {
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [allRepos, setAllRepos] = useState([]);
  const displayedRepos = showAll ? allRepos : repositories.slice(0, 4);
  const showButton = !showAll && repositories.length >= 4;
  const handleShowAll = async () => {
    if (!username) return;
    setIsLoading(true);
    try {
      const repos = await getAllUserRepos(username);
      setAllRepos(repos);
      setShowAll(true);
    } catch (error) {
      console.error("Failed to load all repos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!repositories.length) {
    return null;
  }
  return (
    <div>
      <div className={styles.repoGrid}>
        {displayedRepos.map((repo) => (
          <RepositoryCard
            key={repo.id}
            name={repo.name}
            description={repo.description}
            license={repo.license}
            licenseName={repo.license?.["spdx_id"]}
            forks={repo.forks}
            stars={repo.stargazers_count}
            update={repo.update}
          ></RepositoryCard>
        ))}
      </div>
      {showButton && (
        <button className={styles.showAllBtn} onClick={handleShowAll} disabled={isLoading}>
          {isLoading ? "Loading..." : `View all repositories`}
        </button>
      )}
    </div>
  );
}
export default RepositoriesGrid;
