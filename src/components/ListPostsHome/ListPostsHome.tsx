import { useEffect } from "react";
import usePost from "../../hooks/usePost/usePost";
import CardPostList from "../CardPostList/CardPostList";

const ListPostsHome = (): JSX.Element => {
  const { loadPosts } = usePost();

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <ul>
      <CardPostList
        owner={"Cristina"}
        date={"30/1172022"}
        title="Como mola el bootcamp"
      />
    </ul>
  );
};

export default ListPostsHome;
