import styles from "./RepositoriesGrid.module.scss";
import RepositoryCard from "@/entities/Repository/ui/RepositoryCard";
function RepositoriesGrid({ repositories = [] }) {
  if (!repositories.length) {
    return <div className={styles.empty}>No repositories found</div>;
  }
  return (
    <div>
      <div className={styles.repoGrid}>
        {repositories.map((repo) => (
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
      <button className={styles.showAllBtn} onClick={handleShowAll}>
        View all repositories
      </button>
    </div>
  );
}
export default RepositoriesGrid;
