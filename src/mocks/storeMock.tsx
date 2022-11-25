import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { UiState } from "../redux/features/uiSlice/types";
import { uiReducer } from "../redux/features/uiSlice/uiSlice";
import { RootState, store } from "../redux/store";
import mainStyleColors from "../style/themeColors";
import GlobalStyle from "../style/GlobalStyle";
import { Provider } from "react-redux";
import React from "react";
import { ThemeProvider } from "styled-components";

const initialUiState: UiState = {
  modal: {
    text: "",
    showModal: false,
    isError: false,
  },
  isLoading: false,
};

export const mockInitialStore: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
  },

  preloadedState: {
    ui: initialUiState,
  },
});

export interface ExtendedRenderOptions extends RenderOptions {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
}

const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: { ui: uiReducer },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <Provider store={store}>
        <ThemeProvider theme={mainStyleColors}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </Provider>
    );
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;
