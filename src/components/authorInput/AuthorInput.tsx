import * as React from "react";
import Input from "../../elements/input/Input";

const AuthorInput = () => {
  return (
    <Input
      isInput
      placeholder="당신을 알려주세요 !"
      id="author"
      fontSize="18px"
      fontWeight="700"
      border="none"
      className="right"
      required
    />
  );
};

export default AuthorInput;
