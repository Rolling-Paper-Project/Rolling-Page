import * as React from "react";
import styled from "styled-components";

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
}

const InputEl = styled.input<InputProps>`
  width: 100%;
  height: ${props => props.height};
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-radius: 5px;
  padding: ${props => props.padding};
  border: none;
  &:focus {
    outline: none;
  }
`;

const TextareaAtom = styled.textarea<InputProps>``;

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
        />
      )}
      <div />
    </>
  );
};
export default Input;
