import React from "react";
import { InputStyled } from "./InputStyled";

interface InputProps {
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
}: InputProps) => {
  return (
    <>
      <label htmlFor={htmlFor}>{textLabel}</label>
      <InputStyled
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        id={id}
      />
    </>
  );
};

export default Input;