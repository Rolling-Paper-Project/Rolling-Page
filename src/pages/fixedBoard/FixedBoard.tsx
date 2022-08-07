import * as React from "react";
import { useLocation } from "react-router";
import Container from "../../components/container/Container";
import TitleInput from "../../components/titleInput/TitleInput";

const FixedBoard = () => {
  const location = useLocation();
  const done =
    location.pathname.split("/")[1] === "done" ? "hidden" : undefined;

  return (
    <>
      <TitleInput done={done} />
      <Container done={done} />
    </>
  );
};

export default FixedBoard;
