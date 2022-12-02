import { useEffect } from "react";
import usePost from "../../hooks/usePost/usePost";
import { useAppSelector } from "../../redux/hooks";
import CardPostList from "../CardPostList/CardPostList";
import { ListPostsStyled } from "./ListPostsStyled";

const ListPosts = (): JSX.Element => {
  const { loadPosts } = usePost();
  const { posts } = useAppSelector((state) => state.post);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <ListPostsStyled>
      {posts.map((post, index) => (
        <CardPostList
          owner={post.owner.username}
          title={post.title}
          date={post.date}
          imagePaths={post.imagePaths}
          key={post.id}
        />
      ))}
    </ListPostsStyled>
  );
};

export default ListPosts;
