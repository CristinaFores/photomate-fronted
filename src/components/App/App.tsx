import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import useToken from "../../hooks/useToken/useToken";
import { useAppSelector } from "../../redux/hooks";
import mainStyleColors from "../../style/themeColors";
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
      <ThemeProvider theme={mainStyleColors}>
        {isLoading && <Loading />}
        {showModal && <Modal isError={isError} text={text} />}
        <Layout />
      </ThemeProvider>
    </>
  );
};

export default App;
