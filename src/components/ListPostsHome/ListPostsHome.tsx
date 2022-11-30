import { useEffect } from "react";
import usePost from "../../hooks/usePost/usePost";
import { useAppSelector } from "../../redux/hooks";
import CardPostList from "../CardPostList/CardPostList";

const ListPostsHome = (): JSX.Element => {
  const { post } = useAppSelector((state) => state.post);
  const { loadPosts } = usePost();

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <ul>
      {post.map((post, index) => (
        <CardPostList
          owner={post.owner}
          title={post.date!}
          image={post.image}
        />
      ))}
    </ul>
  );
};

export default ListPostsHome;
