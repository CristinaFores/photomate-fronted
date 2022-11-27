import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  action?: () => void;
  disabled?: boolean;
  ariaLabel: string;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
  styleType: "big" | "small";
  type?: string;
}

const Button = ({
  text,
  action,
  ariaLabel,
  onSubmit,
  disabled,
  styleType,
  type,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      styleType={styleType}
      className="button"
      onClick={action}
      aria-label={ariaLabel}
      disabled={disabled}
      onSubmit={onSubmit}
      type="button"
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
