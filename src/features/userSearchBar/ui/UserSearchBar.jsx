import styles from "./UserSearchBar.module.scss";
import searchIcon from "@/assets/icons/Search.svg";
function UserSearchBar({ value, onChange }) {
  return (
    <label className={styles.searchbar}>
      <img src={searchIcon} alt="search icon" />
      <input type="text" name="searchbar" id="searchbar" placeholder="username" value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}
export default UserSearchBar;
