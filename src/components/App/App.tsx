import { useEffect } from "react";
import useToken from "../../hooks/useToken/useToken";
import { useAppSelector } from "../../redux/hooks";

import Layout from "../Layout/Layout";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";

const App = () => {
  const {
    isLoading,
    modal: { text, isError, showModal },
  } = useAppSelector((state) => state.ui);

  const { getToken } = useToken();

  useEffect(() => {
    getToken();
  }, [getToken]);

  return (
    <>
      {isLoading && <Loading />}
      {showModal && <Modal isError={isError} text={text} />}
      <Layout />
    </>
  );
};

export default App;
