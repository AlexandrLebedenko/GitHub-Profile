import { useState, useEffect } from "react";
import styles from "./MainPage.module.scss";
import Header from "@/widgets/Header/Header";
import Container from "@/shared/ui/Container/Container";
import RepositoriesGrid from "@/widgets/RepositoriesGrid/RepositoriesGrid";
import UserProfile from "@/widgets/UserProfile/UserProfile";
import { getUserRepos } from "@/entities/User/model/api";
function MainPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectUser = async (user) => {
    setSelectedUser(user);
    setIsLoading(true);

    const repos = await getUserRepos(user.login);
    setRepositories(repos);
    setIsLoading(false);
  };

  if (isLoading) {
    return <div>Loading repositories...</div>;
  }
  return (
    <main className={styles.main}>
      <Header onSelectUser={handleSelectUser}></Header>
      <Container>
        <UserProfile user={selectedUser}></UserProfile>
        <RepositoriesGrid repositories={repositories}></RepositoriesGrid>
      </Container>
    </main>
  );
}
export default MainPage;
