import { Provider } from "react-redux";
import GlobalStyle from "../style/GlobalStyle";
import { mockInitialStore } from "./storeMock";

interface ProviderWrapperProps {
  children: JSX.Element | JSX.Element[];
}
const ProviderWrapper = ({ children }: ProviderWrapperProps) => {
  return (
    <Provider store={mockInitialStore}>
      <GlobalStyle />
      {children}
    </Provider>
  );
};

export default ProviderWrapper;
