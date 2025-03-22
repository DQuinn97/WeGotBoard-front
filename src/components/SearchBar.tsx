import style from "../css_modules/searchbar.module.css";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <form className={style.search} onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search for items..."
        name="search"
        id="search"
      />
      <select name="category" id="category">
        <option value="products">All Categories</option>
        <option value="board">Boardgames</option>
        <option value="card">Cardgames</option>
        <option value="dice">Dicegames</option>
      </select>

      <button>
        <i>
          <BsSearch />
        </i>
      </button>
    </form>
  );
};

export default SearchBar;
