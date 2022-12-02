import { useEffect } from "react";
import usePost from "../../hooks/usePost/usePost";
import { useAppSelector } from "../../redux/hooks";
import CardPostList from "../CardPostList/CardPostList";
import { ListPostsHomeStyled } from "./ListPostsHomeStyled";

const ListPostsHome = (): JSX.Element => {
  const { loadPosts } = usePost();
  const { posts } = useAppSelector((state) => state.post);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <ListPostsHomeStyled>
      {posts.map((post, index) => (
        <CardPostList
          owner={"cris"}
          title={post.title}
          date={post.date}
          imagePaths={post.imagePaths}
        />
      ))}
    </ListPostsHomeStyled>
  );
};

export default ListPostsHome;
