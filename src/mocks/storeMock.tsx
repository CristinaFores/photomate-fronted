import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { UiState } from "../redux/features/uiSlice/types";
import { uiReducer } from "../redux/features/uiSlice/uiSlice";
import { RootState, store } from "../redux/store";
import mainStyleColors from "../style/themeColors";
import GlobalStyle from "../style/GlobalStyle";
import { Provider } from "react-redux";
import { InitialEntry } from "@remix-run/router";
import { ThemeProvider } from "styled-components";
import { userReducer } from "../redux/features/userSlice/userSlice";
import { UserState } from "../redux/features/userSlice/types";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { postsReducer } from "../redux/features/postSlice/postSlice";
import { PostsState } from "../redux/features/postSlice/types";

export const initialUiState: UiState = {
  modal: {
    text: "",
    showModal: false,
    isError: false,
  },
  isLoading: false,
};
export const initialState: UserState = {
  id: "",
  token: "",
  username: "",
  isLogged: false,
};

export const initialPostState: PostsState = {
  posts: [],
  post: {
    id: "1",
    owner: "1",
    title: "new post",
    description: "",
  },
};

export const mockInitialStore: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    post: postsReducer,
  },

  preloadedState: {
    ui: initialUiState,
    user: initialState,
    post: initialPostState,
  },
});

export interface ExtendedRenderOptions extends RenderOptions {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
  initialEntries?: InitialEntry[];
}

interface ExtendedPropsWithChildren extends PropsWithChildren {
  initialEntries?: InitialEntry[];
}

const Router = ({
  children,
  initialEntries,
}: ExtendedPropsWithChildren): JSX.Element => {
  return initialEntries ? (
    <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
  ) : (
    <BrowserRouter>{children}</BrowserRouter>
  );
};

const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState,
    initialEntries,
    store = configureStore({
      reducer: {
        ui: uiReducer,
        user: userReducer,
        post: postsReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <>
        <Router initialEntries={initialEntries}>
          <Provider store={store}>
            <ThemeProvider theme={mainStyleColors}>
              <GlobalStyle />
              {children}
            </ThemeProvider>
          </Provider>
        </Router>
      </>
    );
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;
