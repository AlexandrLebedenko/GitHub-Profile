import styles from "./RepositoriesGrid.module.scss";
import RepositoryCard from "@/entities/Repository/ui/RepositoryCard";
function RepositoriesGrid({ repositories }) {
  return (
    <div className={styles.repoGrid}>
      {repositories.map((repo) => (
        <RepositoryCard
          name={repo.name}
          description={repo.description}
          license={repo.license}
          licenseName={repo.licenseName}
          forks={repo.forks}
          stars={repo.stars}
          update={repo.update}
        ></RepositoryCard>
      ))}
    </div>
  );
}
export default RepositoriesGrid;
