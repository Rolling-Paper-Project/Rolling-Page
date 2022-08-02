import * as React from "react";
import styled from "styled-components";
import Input from "../../elements/input/Input";
// import { FC } from "react";

const Title = styled.h2`
  color: #b4b4b4;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 5px;
`;

const TitleInput = () => {
  return (
    <form>
      <label htmlFor="contents">
        <Title>Title</Title>
      </label>
      <Input
        isInput
        height="auto"
        color="black"
        bgColor="#EFEFEF"
        placeholder="받는 사람을 입력해주세요"
        id="contents"
        type="text"
        padding="13px"
        // value=""
      />
    </form>
  );
};

export default TitleInput;
