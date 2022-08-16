import * as React from "react";
import TextareaEl from "../../elements/textarea/Textarea";
import { checkContentOverFlow, getPostHeight } from "../../utils/postInput";

interface ContentProps {
  setMainTxt?: React.Dispatch<React.SetStateAction<string>>;
  mainTxt: string;
}

const ContentInput: React.FC<ContentProps> = ({ setMainTxt, mainTxt }) => {
  const handleOnchange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.target;
    if (!checkContentOverFlow(162, getPostHeight(event))) {
      // eslint-disable-next-line no-unused-expressions
      setMainTxt && setMainTxt(input.value);
    }
  };

  return (
    <TextareaEl
      value={mainTxt}
      onChange={handleOnchange}
      isInput={false}
      height="165px"
      placeholder="내용을 입력해주세요 !"
      id="contents"
      fontSize="14px"
      fontWeight="400"
      border="none"
      bgColor="transparent"
      className="text"
      required
    />
  );
};

export default ContentInput;
