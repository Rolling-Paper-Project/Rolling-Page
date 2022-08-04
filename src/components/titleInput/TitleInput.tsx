import * as React from "react";
import Input from "../../elements/input/Input";
import "./titleInputStyle";
import { Title, TitleWrap, DivFlex, TitleBtn } from "./titleInputStyle";

const TitleInput = () => {
  return (
    <TitleWrap>
      <h2 className="ir">타이틀 입력</h2>
      <form>
        <label htmlFor="title">
          <Title>Title</Title>
        </label>

        <DivFlex>
        <Input
          isInput
          height="auto"
          bgColor="#EFEFEF"
          placeholder="받는 사람을 입력해주세요"
          id="title"
          padding="13px"
          fontSize="14px"
          fontWeight="400"
          required
          />
        <TitleBtn 
          onClick={() => {
            ("");
          }}
        >저장</TitleBtn>
        </DivFlex>
      </form>
    </TitleWrap>
  );
};

export default TitleInput;
