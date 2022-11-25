import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  action?: () => void;
  disabled?: boolean;
  ariaLabel: string;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
}

const Button = ({
  text,
  action,
  ariaLabel,
  onSubmit,
  disabled,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      className="button"
      onClick={action}
      aria-label={ariaLabel}
      disabled={disabled}
      onSubmit={onSubmit}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
