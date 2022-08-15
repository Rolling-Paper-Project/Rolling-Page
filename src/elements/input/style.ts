import styled, { css } from "styled-components";
import { InputProps } from "./Input";

export const inputCss = css<InputProps>`
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

export const InputEl = styled.input<InputProps>`
  ${inputCss}
  border: none;

  &.right {
    text-align: right;
  }

  &::placeholder {
    font-weight: 400;
  }
`;