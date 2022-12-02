import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardPostDetails from "../../components/CardPostDetails/CardPostDetails";
import usePost from "../../hooks/usePost/usePost";
import { useAppSelector } from "../../redux/hooks";

const DetailPostPage = (): JSX.Element => {
  const { getPostById } = usePost();
  const { post } = useAppSelector((state) => state.post);
  const { id } = useParams();
  useEffect(() => {
    getPostById(id!);
  }, [getPostById, id]);

  return (
    <>
      <CardPostDetails
        title={post.title}
        description={post.description}
        imagePaths={post.imagePaths}
        date={post.date}
        key={id}
        owner={post.owner.username}
      />
    </>
  );
};

export default DetailPostPage;
