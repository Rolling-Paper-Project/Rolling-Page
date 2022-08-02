import * as React from "react";
import styled from "styled-components";

interface InputProps {
  isInput: boolean;
  bgColor: string;
  color: string;
  height: string;
  placeholder: string;
  id: string;
  type: string;
  padding: string;
}

const InputAtom = styled.input<InputProps>`
  width: 100%;
  height: ${props => props.height};
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-radius: 5px;
  padding: ${props => props.padding};
`;

const TextareaAtom = styled.textarea<InputProps>``;

const Input = ({
  isInput,
  height,
  color,
  bgColor,
  placeholder,
  id,
  type,
  padding,
}: InputProps) => {
  return (
    <>
      {isInput ? (
        <InputAtom
          height={height}
          color={color}
          bgColor={bgColor}
          isInput={isInput}
          placeholder={placeholder}
          id={id}
          type={type}
          padding={padding}
        />
      ) : (
        <TextareaAtom
          height={height}
          color={color}
          bgColor={bgColor}
          isInput={isInput}
          placeholder={placeholder}
          id={id}
          type={type}
          padding={padding}
        />
      )}
      <div />
    </>
  );
};
export default Input;
