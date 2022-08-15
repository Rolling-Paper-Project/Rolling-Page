import * as React from "react";
import { InputEl } from "./style";

export interface InputProps {
  isInput: boolean;
  bgColor?: string;
  color?: string;
  fontSize: string;
  fontWeight: string;
  height?: string;
  placeholder: string;
  id: string;
  type?: string;
  padding?: string;
  value?: string;
  border?: string;
  required?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  isInput = true,
  height,
  color,
  fontWeight,
  bgColor,
  placeholder,
  id,
  type,
  padding,
  value,
  border,
  fontSize,
  className,
  required = true,
  onChange,
}: InputProps) => {
  return (
    <InputEl
      height={height ?? height}
      color={color ?? color}
      bgColor={bgColor ?? bgColor}
      padding={padding ?? padding}
      value={value ?? value}
      required={required ?? required}
      type={type ?? type}
      fontSize={fontSize}
      fontWeight={fontWeight}
      isInput={isInput}
      placeholder={placeholder}
      id={id}
      className={className ?? className}
      onChange={onChange ?? onChange}
    />
  );
};

export default Input;
