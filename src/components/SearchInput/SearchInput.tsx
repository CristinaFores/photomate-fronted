import usePost from "../../hooks/usePost/usePost";
import SearchInputStyled from "./SearchInputStyled";

const SearchInput = (): JSX.Element => {
  const { loadPosts } = usePost();

  return (
    <>
      <SearchInputStyled className="group">
        <input
          placeholder="Search"
          type="search"
          className="input"
          onChange={(e) => {
            loadPosts({ search: e.target.value, limit: 0 });
          }}
        />
      </SearchInputStyled>
    </>
  );
};

export default SearchInput;
