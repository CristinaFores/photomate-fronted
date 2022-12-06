import { useEffect, useState } from "react";
import usePost from "../../hooks/usePost/usePost";
import { useAppSelector } from "../../redux/hooks";
import CardPostList from "../CardPostList/CardPostList";
import Pagination from "../Pagination/Pagination";
import { ListPostsStyled } from "./ListPostsStyled";

const ListPosts = (): JSX.Element => {
  const { loadPosts } = usePost();
  const { posts, total } = useAppSelector((state) => state.post);
  const [totalPosts, setTotalPosts] = useState(2);

  useEffect(() => {
    loadPosts({ limit: totalPosts });
  }, [totalPosts, loadPosts]);

  return (
    <ListPostsStyled>
      {posts.map((post, index) => (
        <CardPostList
          owner={post.owner}
          title={post.title}
          date={post.date}
          imagePaths={post.buckpicture!}
          key={post.id}
          id={post.id}
        />
      ))}
      <li>
        <Pagination
          disabled={posts.length >= total}
          onClick={() => {
            setTotalPosts(totalPosts + 2);
          }}
        />
      </li>
    </ListPostsStyled>
  );
};

export default ListPosts;
