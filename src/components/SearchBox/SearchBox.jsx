import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

function SearchBox() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectNameFilter);

  const handleSearchChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label className={styles.searchBox_label}>Find contacts by name or surname:</label>
      <input
        className={styles.searchBox_input}
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search contacts..."
      />
    </div>
  );
}

export default SearchBox;
