import { Provider } from "react-redux";
import { mockInitialStore } from "./storeMock";
import { BrowserRouter } from "react-router-dom";

interface ProviderWrapperProps {
  children: JSX.Element | JSX.Element[];
}
const ProviderWrapper = ({ children }: ProviderWrapperProps) => {
  return (
    <BrowserRouter>
      <Provider store={mockInitialStore}>{children}</Provider>
    </BrowserRouter>
  );
};

export default ProviderWrapper;
