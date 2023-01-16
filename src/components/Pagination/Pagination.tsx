import ButtonStyled from "../Button/ButtonStyled";

const Pagination = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
): JSX.Element => {
  return (
    <ButtonStyled aria-label="Cargar más" styleType="medium" {...props}>
      {"Cargar más"}
    </ButtonStyled>
  );
};

export default Pagination;
