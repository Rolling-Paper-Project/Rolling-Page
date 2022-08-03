import * as React from "react";
import styled from "styled-components";

interface Props {
  onClick: () => void;
}

const Btn = styled.button`
  border: none;
  cursor: pointer;
  width: 100px;
  height: 44px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  &:hover {
    opacity: 0.5;
  }
`;

const Basic = styled(Btn)`
  background: #977ae1;
  color: #ffffff;
`;

const Cancel = styled(Btn)`
  background: #ffffff;
  color: black;
  border: 1px solid #977ae1;
`;

const BasicBtn = ({ onClick }: Props) => {
  return <Basic onClick={onClick}>저장</Basic>;
};

const CancelBtn = ({ onClick }: Props) => {
  return <Cancel onClick={onClick}>취소</Cancel>;
};

export { BasicBtn, CancelBtn };
