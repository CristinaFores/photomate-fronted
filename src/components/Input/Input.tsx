import React from "react";
import { InputStyled } from "./InputStyled";

interface inputProps {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  htmlFor: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  autoComplete?: string;
  id?: string;
  textLabel: string;
}

const Input = ({
  type,
  placeholder,
  htmlFor,
  onChange,
  required,
  autoComplete,
  id,
  textLabel,
}: inputProps) => {
  return (
    <label htmlFor={htmlFor}>
      {textLabel}
      <InputStyled
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        id={id}
      />
    </label>
  );
};

export default Input;
