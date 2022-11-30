import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import CardPostList from "../CardPostList/CardPostList";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Navbar from "../NavBar/Navbar";
import { LayoutStyled } from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header
        children={
          <>
            <Logo />
            <Navbar />
          </>
        }
      />
      <LayoutStyled>
        <CardPostList />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </LayoutStyled>
    </>
  );
};

export default Layout;
