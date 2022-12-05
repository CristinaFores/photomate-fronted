import { useEffect } from "react";
import usePost from "../../hooks/usePost/usePost";
import { useAppSelector } from "../../redux/hooks";
import CardPostList from "../CardPostList/CardPostList";
import { ListPostsStyled } from "./ListPostsStyled";

const ListPosts = (): JSX.Element => {
  const { loadPosts, deletePost } = usePost();
  const { posts, post } = useAppSelector((state) => state.post);

  useEffect(() => {
    deletePost(post.id);
    loadPosts();
  }, [deletePost, loadPosts, post.id]);

  return (
    <ListPostsStyled>
      {posts.map((post, index) => (
        <CardPostList
          owner={post.owner.username}
          title={post.title}
          date={post.date}
          imagePaths={post.buckpicture!}
          key={post.id}
          id={post.id}
        />
      ))}
    </ListPostsStyled>
  );
};

export default ListPosts;
