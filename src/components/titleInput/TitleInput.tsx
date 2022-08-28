import * as React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import Input from "../../elements/input/Input";
import { Title, TitleWrap, DivFlex, TitleBtn } from "./style";
import { addBoard } from "../../apis/posts";

interface TitleProps {
  done?: string | undefined;
}

const TitleInput = ({ done }: TitleProps) => {
  const navigate = useNavigate();
  const [text, setText] = React.useState("");

  const setValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const { mutate: addBoardTit } = useMutation(() => addBoard(text), {
    onSuccess: data => navigate(`/board/${data.id}`),
  });

  const onClickSubmit = (e: any) => {
    e.preventDefault();
    addBoardTit();
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
            onChange={setValue}
          />
          <TitleBtn onClick={onClickSubmit}>저장</TitleBtn>
        </DivFlex>
      </form>
    </TitleWrap>
  );
};

export default TitleInput;
