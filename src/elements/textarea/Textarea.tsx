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
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}
const inputCss = css<InputProps>`
  height: ${props => props.height};
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  border-radius: 5px;
  padding: ${props => props.padding};
  border: ${props => props.border};
  overflow: hidden;
  &:focus {
    outline: none;
  }
`;

const TextareaAtom = styled.textarea<InputProps>`
  ${inputCss}
  white-space:pre-wrap;
  resize: none;
  /* width: 222px;
  height: 165px; */
  &::placeholder {
    font-weight: 400;
  }
`;

const TextareaEl = ({
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
  onKeyPress,
}: InputProps) => {
  return (
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
      onChange={onChange ?? onChange}
      onKeyPress={onKeyPress ?? onKeyPress}
    />
  );
};
export default TextareaEl;
