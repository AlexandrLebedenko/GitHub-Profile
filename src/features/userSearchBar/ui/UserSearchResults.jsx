import styles from "./UserSearchResults.module.scss";
function UserSearchResults({ user, isLoading, notFound, onSelect }) {
  // Состояние загрузки
  if (isLoading) {
    return (
      <div className={styles.searchBarResults}>
        <p>Loading user data...</p>
      </div>
    );
  }

  // Пользователь не найден
  if (notFound) {
    return (
      <div className={styles.searchBarResults}>
        <p>User not found</p>
      </div>
    );
  }

  // Нет данных (ни загрузка, ни ошибка, ни пользователь)
  if (!user) {
    return null;
  }
  return (
    <div className={styles.searchBarResults} onClick={() => onSelect?.(user)}>
      <img className={styles.userIcon} src={user.avatar_url} alt="user icon" />
      <div className={styles["searchBarResults__description"]}>
        <h3 className={styles["searchBarResults__userName"]}>{user.name}</h3>
        <p className={styles["searchBarResults__userBio"]}>{user.bio}</p>
      </div>
    </div>
  );
}
export default UserSearchResults;
