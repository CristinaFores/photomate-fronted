import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  action?: () => void;
  disabled?: boolean;
  ariaLabel: string;
}

const Button = ({
  text,
  action,
  ariaLabel,

  disabled,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      className="button"
      onClick={action}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
