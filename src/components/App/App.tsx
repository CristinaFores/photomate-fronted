import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import useToken from "../../hooks/useToken/useToken";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import { useAppSelector } from "../../redux/hooks";
import mainStyleColors from "../../style/themeColors";

import Modal from "../Modal/Modal";

const App = () => {
  const {
    modal: { text, isError, showModal },
  } = useAppSelector((state) => state.ui);

  const { getToken } = useToken();

  useEffect(() => {
    getToken();
  }, [getToken]);

  return (
    <>
      <ThemeProvider theme={mainStyleColors}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        {showModal && <Modal isError={isError} text={text} />}
      </ThemeProvider>
    </>
  );
};

export default App;
