import * as React from "react";
import Input from "../../elements/input/Input";

interface AuthorProps {
  setAuthor?: React.Dispatch<React.SetStateAction<string>>;
  author: string;
}

const AuthorInput: React.FC<AuthorProps> = ({ setAuthor, author }) => {
  const onInputFunc = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const titLength = input.value.length;
    if (titLength > 8) {
      alert("8자까지 작성 가능합니다!");
    } else if (setAuthor) {
      setAuthor(input.value);
    }
    return input.value;
  };

  return (
    <Input
      value={author}
      onChange={onInputFunc}
      isInput
      placeholder="당신을 알려주세요 !"
      id="author"
      fontSize="18px"
      fontWeight="700"
      border="none"
      className="right"
      bgColor="transparent"
      required
    />
  );
};

export default AuthorInput;
