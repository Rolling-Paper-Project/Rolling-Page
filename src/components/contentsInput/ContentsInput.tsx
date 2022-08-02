import * as React from "react";
import Input from "../../elements/input/Input";

const ContentInput = () => {
  return (
    <Input
      isInput={false}
      height="165px"
      placeholder="내용을 입력해주세요 !"
      id="contents"
      fontSize="14px"
      fontWeight="400"
      border="none"
      required
    />
  );
};

export default ContentInput;
