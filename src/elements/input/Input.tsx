import * as React from "react";
import styled, { css } from "styled-components";

interface InputProps {
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
  onChange?: (event:React.ChangeEvent<HTMLInputElement>) => void;
}
const inputCss = css<InputProps>`
  width: 100%;
  height: ${props => props.height};
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  border-radius: 5px;
  padding: ${props => props.padding};
  border: ${props => props.border};
  &:focus {
    outline: none;
  }
`;
const InputEl = styled.input<InputProps>`
  ${inputCss}
  border: none;
  &.right {
    text-align: right;
  }
  &::placeholder {
    font-weight: 400;
  }
`;

const TextareaAtom = styled.textarea<InputProps>`
  ${inputCss}
  resize: none;
  &::placeholder {
    font-weight: 400;
  }
`;

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
    <>
      {isInput ? (
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
      ) : (
        <TextareaAtom
          height={height ?? height}
          color={color ?? color}
          bgColor={bgColor ?? bgColor}
          padding={padding ?? padding}
          value={value ?? value}
          border={border ?? border}
          required={required ?? required}
          type={type ?? type}
          fontSize={fontSize}
          fontWeight={fontWeight}
          isInput={isInput}
          placeholder={placeholder}
          id={id}
          className={className ?? className}
          // onChange={onChange ?? onChange}
        />
      )}
      <div />
    </>
  );
};
export default Input;
