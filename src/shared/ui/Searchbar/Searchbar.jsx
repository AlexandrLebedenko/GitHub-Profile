import styles from "./Searchbar.module.scss";
import searchIcon from "../../../assets/icons/Search.svg";
function Searchbar({}) {
  return (
    <label className={styles.searchbar}>
      <img src={searchIcon} alt="search icon" />
      <input type="search" name="searchbar" id="searchbar" />
    </label>
  );
}
export default Searchbar;
