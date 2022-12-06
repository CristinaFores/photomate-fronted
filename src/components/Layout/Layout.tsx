import { Route, Routes } from "react-router-dom";
import CreatePostPage from "../../pages/CreatePostPage/CreatePostPage";
import DetailPostPage from "../../pages/DetailPostPage/DetailPostPage";
import EditPostPage from "../../pages/EditPagePost/EditPostPage";
import ListPostPage from "../../pages/ListPostsPage/ListPostsPage";

import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import { useAppSelector } from "../../redux/hooks";
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
                <Navbar />
                <SearchInput />
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
              <ProtectedRoute
                children={<ListPostPage />}
                isLogged={true}
              ></ProtectedRoute>
            }
          />
          <Route path="/posts/:id" element={<DetailPostPage />} />
          <Route path="/newpost" element={<CreatePostPage />} />
          <Route path="/editpost/:id" element={<EditPostPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </LayoutStyled>
    </>
  );
};

export default Layout;
