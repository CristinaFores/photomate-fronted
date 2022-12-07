import { useCallback } from "react";
import usePost from "../../hooks/usePost/usePost";
import SearchInputStyled from "./SearchInputStyled";

const SearchInput = (): JSX.Element => {
  const { loadPosts } = usePost();

  const debounce = <T extends any[]>(
    callbackFunction: (...args: T) => void,
    delay: number
  ) => {
    let timerId: ReturnType<typeof setTimeout>;
    return (...args: T) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => callbackFunction(...args), delay);
    };
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncePost = useCallback(debounce(loadPosts, 1000), [loadPosts]);

  return (
    <>
      <SearchInputStyled className="group">
        <input
          placeholder="Search"
          type="search"
          className="input"
          onChange={(e) => {
            debouncePost({ search: e.target.value, limit: 0 });
          }}
        />
      </SearchInputStyled>
    </>
  );
};

export default SearchInput;
