import * as React from "react";
import axios from "axios";
import { useParams } from "react-router";
import Input from "../../elements/input/Input";
import { BASE_URL, TOKEN, ACCOUNTNAME } from "../../constants/index";
import { Title, TitleWrap, DivFlex, TitleBtn } from "./titleInputStyle";
import "./titleInputStyle";

interface TitleProps {
  done?: string | undefined;
}

const TitleInput = ({ done }: TitleProps) => {
  const [text, setText] = React.useState("");

  const handleSubmit = async () => {
    const url = `${BASE_URL}/post`;

    try {
      const res = await axios.post(
        url,
        {
          post: {
            content: text,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-type": "application/json",
          },
        },
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const saveValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onClickSubmit = (e: any) => {
    handleSubmit();
    e.preventDefault();
  };

  return (
    <TitleWrap>
      <h2 className="ir">타이틀 입력</h2>
      <form className={done}>
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
            onChange={saveValue}
          />
          <TitleBtn onClick={onClickSubmit}>저장</TitleBtn>
        </DivFlex>
      </form>
    </TitleWrap>
  );
};

export default TitleInput;
