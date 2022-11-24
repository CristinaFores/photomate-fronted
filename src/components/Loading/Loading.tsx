import { LoadingStyled } from "./LoadingStyled";

const Loading = (): JSX.Element => {
  return (
    <LoadingStyled
      className="loader"
      data-testid="custom-element"
      aria-label="Please wait"
    >
      <div className="sc-dkrFOg ibKnPv loader">
        <div></div>
        <div></div>
      </div>
    </LoadingStyled>
  );
};

export default Loading;
