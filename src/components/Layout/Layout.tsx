import { Route, Routes } from "react-router-dom";
import CreatePostPage from "../../pages/CreatePostPage/CreatePostPage";
import DetailPostPage from "../../pages/DetailPostPage/DetailPostPage";
import EditPostPage from "../../pages/EditPagePost/EditPostPage";
import ListPostPage from "../../pages/ListPostsPage/ListPostsPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import { useAppSelector } from "../../redux/hooks";
import ExitRoute from "../ExitRouter/ExitRouter";
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
          <Route
            path="/"
            element={
              <ExitRoute children={<LoginPage />} isLogged={false}></ExitRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ExitRoute children={<LoginPage />} isLogged={false}></ExitRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ExitRoute
                children={<RegisterPage />}
                isLogged={false}
              ></ExitRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute
                children={<ListPostPage />}
                isLogged={true}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute
                children={<Logo />}
                isLogged={true}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/posts/:id"
            element={
              <ProtectedRoute
                children={<DetailPostPage />}
                isLogged={true}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/newpost"
            element={
              <ProtectedRoute
                children={<CreatePostPage />}
                isLogged={true}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/editpost/:id"
            element={
              <ProtectedRoute
                children={<EditPostPage />}
                isLogged={true}
              ></ProtectedRoute>
            }
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </LayoutStyled>
    </>
  );
};

export default Layout;
