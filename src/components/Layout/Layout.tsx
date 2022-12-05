import { Route, Routes } from "react-router-dom";
import DetailPostPage from "../../pages/DetailPostPage/DetailPostPage";
import ListPostPage from "../../pages/ListPostsPage/ListPostsPage";

import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import { useAppSelector } from "../../redux/hooks";
import CreateNewPost from "../CreateNewPost/CreateNewPost";
import Header from "../Header/Header";

import Logo from "../Logo/Logo";
import Navbar from "../NavBar/Navbar";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SearchInput from "../SearchInput/SearchInput";
import { LayoutStyled } from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);

  return (
    <>
      <Header
        children={
          <>
            <Logo />
            {isLogged ? (
              <>
                <SearchInput />
                <Navbar />
              </>
            ) : null}
          </>
        }
      />

      <LayoutStyled>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <ListPostPage />
              </ProtectedRoute>
            }
          />
          <Route path="/posts/:id" element={<DetailPostPage />} />
          <Route path="/newpost" element={<CreateNewPost />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </LayoutStyled>
    </>
  );
};

export default Layout;
