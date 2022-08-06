import * as React from "react";
import { useParams } from "react-router";
import axios from "axios";
import { BasicBtn, CancelBtn } from "../../hooks/buttons/button";
import {
  BtnWrap,
  ModalBg,
  ModalExp,
  ModalTitle,
  ModalWrap,
} from "./deleteModalStyle";

import { BASE_URL, TOKEN } from "../../constants/index";

interface Props {
  commentId?: string;
  closeDeleteModal: () => void;
  setPost: () => void;
}

const DeletModal = ({ commentId, closeDeleteModal, setPost }: Props) => {
  const { id } = useParams();

  const deletePost = async () => {
    const url = `${BASE_URL}/post/${id}/comments/${commentId}`;
    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    };
    try {
      const res = await axios.delete(url, config);
      closeDeleteModal();
      setPost();
    } catch (error) {
      window.alert(error);
      closeDeleteModal();
      setPost();
    }
  };

  return (
    <ModalBg>
      <ModalWrap>
        <ModalTitle>정말로 삭제하시겠습니까?</ModalTitle>
        <ModalExp>삭제하면 되돌릴 수 없어요! :(</ModalExp>
        <BtnWrap>
          <CancelBtn onClick={closeDeleteModal}>취소</CancelBtn>
          <BasicBtn onClick={deletePost}>삭제</BasicBtn>
        </BtnWrap>
      </ModalWrap>
    </ModalBg>
  );
};

export default DeletModal;
