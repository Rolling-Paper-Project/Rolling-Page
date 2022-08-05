import * as React from "react";
import { useParams } from "react-router";
import axios from "axios";
import { BasicBtn, CancelBtn } from "../../elements/buttons/button";
import './deleteModalStyle'
import { BtnWrap, ModalBg, ModalExp, ModalTitle, ModalWrap } from "./deleteModalStyle";
import { BASE_URL, TOKEN } from "../../constants/index";

interface Props {
  key?: string;
  closeDeleteModal: () => void;
}

const DeletModal = ({key, closeDeleteModal} : Props) => {
  const { id } = useParams();
  
  const deletePost = async () => {
    const url = `${BASE_URL}/post/${id}/comments/${key}`;
    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    };
    try {
      const res = await axios.delete(url, config);
      return res;
    } catch (err) {
      return err;
    }
  };
  
  return (
    <>
    <ModalWrap>
      <ModalTitle>정말로 삭제하시겠습니까?</ModalTitle>
      <ModalExp>삭제하면 되돌릴 수 없어요! :(</ModalExp>
      <BtnWrap>
        <CancelBtn
          onClick={closeDeleteModal}
        >취소
        </CancelBtn>
        <BasicBtn
          onClick={deletePost}
          >삭제
        </BasicBtn>
      </BtnWrap>
    </ModalWrap>
    <ModalBg/>
    </>
  )
};

export default DeletModal;