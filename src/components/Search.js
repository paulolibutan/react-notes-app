import { MdSearch } from "react-icons/md";

const Search = () => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3rem" />
      <input type="text" placeholder="Type to search..." />
    </div>
  );
};

export default Search;
