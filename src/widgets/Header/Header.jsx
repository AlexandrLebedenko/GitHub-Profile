import styles from "./Header.module.scss";
import { useUserSearchBar } from "@/features/userSearchBar/model/useUserSearchBar";
import UserSearchBar from "@/features/userSearchBar/ui/UserSearchBar"; ///
import UserSearchResults from "@/features/userSearchBar/ui/UserSearchResults"; ///

function Header({ onSelectUser }) {
  const { query, setQuery, user: searchedUser, isLoading, notFound, error } = useUserSearchBar();
  const handleSelect = (selectedUser) => {
    setQuery("");
    onSelectUser(selectedUser); // ← теперь ясно, что это параметр
  };
  return (
    <header className={styles.header}>
      <UserSearchBar value={query} onChange={setQuery}></UserSearchBar>
      {query && (
        <UserSearchResults user={searchedUser} isLoading={isLoading} notFound={notFound} error={error} onSelect={handleSelect}></UserSearchResults>
      )}
    </header>
  );
}
export default Header;
