import * as React from "react";
import styled, { css } from "styled-components";

interface InputProps {
  isInput: boolean;
  bgColor: string;
  color?: string;
  height?: string;
  placeholder: string;
  id: string;
  type: string;
  padding: string;
  value?: string;
  border?: string;
  required?: boolean;
}
const inputCss = css<InputProps>`
  width: 100%;
  height: ${props => props.height};
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
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
`;

const TextareaAtom = styled.textarea<InputProps>`
  ${inputCss}
  resize: none;
`;

const Input = ({
  isInput = true,
  height,
  color,
  bgColor,
  placeholder,
  id,
  type,
  padding,
  value,
  border,
  required = true,
}: InputProps) => {
  return (
    <>
      {isInput ? (
        <InputEl
          height={height ?? height}
          color={color ?? color}
          bgColor={bgColor}
          isInput={isInput}
          placeholder={placeholder}
          id={id}
          type={type}
          padding={padding}
          value={value ?? value}
          required={required ?? required}
        />
      ) : (
        <TextareaAtom
          height={height}
          color={color ?? color}
          bgColor={bgColor}
          isInput={isInput}
          placeholder={placeholder}
          id={id}
          type={type}
          padding={padding}
          value={value ?? value}
          border={border ?? border}
          required={required ?? required}
        />
      )}
      <div />
    </>
  );
};
export default Input;
