import styled, { css } from "styled-components";
import { InputProps } from "./Textarea";

export const inputCss = css<InputProps>`
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

export const TextareaAtom = styled.textarea<InputProps>`
  ${inputCss}
  white-space:pre-wrap;
  resize: none;
  &::placeholder {
    font-weight: 400;
    font-size: 0.8rem;
  }
`;
