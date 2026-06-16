import { useState, useEffect } from "react";
import styles from "./MainPage.module.scss";
import Header from "@/widgets/Header/Header";
import Container from "@/shared/ui/Container/Container";
import RepositoriesGrid from "@/widgets/RepositoriesGrid/RepositoriesGrid";
import UserProfile from "@/widgets/UserProfile/UserProfile";
import { getUserRepos, searchUserByUsername } from "@/entities/User/model/api";
function MainPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadDefaultUser = async () => {
      const defaultUsername = "github"; // ← можно заменить на любого
      const user = await searchUserByUsername(defaultUsername);
      if (user) {
        setSelectedUser(user);
        const repos = await getUserRepos(user.login);
        setRepositories(repos);
      }
    };
    loadDefaultUser();
  }, []);

  const handleSelectUser = async (user) => {
    setSelectedUser(user);
    setIsLoading(true);
    const repos = await getUserRepos(user.login);
    setRepositories(repos);
    setIsLoading(false);
  };
  return (
    <main className={styles.main}>
      <Header onSelectUser={handleSelectUser}></Header>
      <Container>
        <UserProfile user={selectedUser}></UserProfile>
        <RepositoriesGrid repositories={repositories} username={selectedUser?.login}></RepositoriesGrid>
      </Container>
    </main>
  );
}
export default MainPage;
