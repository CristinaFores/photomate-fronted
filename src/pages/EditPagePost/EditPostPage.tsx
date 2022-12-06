import CreateNewPost from "../../components/CreateNewPost/CreateNewPost";

const EditPostPage = (): JSX.Element => {
  return (
    <>
      <CreateNewPost isEditMode={true} />
    </>
  );
};

export default EditPostPage;
