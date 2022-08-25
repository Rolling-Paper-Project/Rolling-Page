import * as React from "react";
import { useParams } from "react-router";
import { useMutation, useQueryClient } from "react-query";
import { BasicBtn, CancelBtn } from "../../elements/button/Button";
import { BtnWrap, ModalBg, ModalExp, ModalTitle, ModalWrap } from "./style";
import { deletePost } from "../../apis/posts";

interface Props {
  postId?: string;
  setIsModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteModal = ({ postId, setIsModalState }: Props) => {
  const { id } = useParams();

  const queryClient = useQueryClient();

  const { mutate: deletePostList } = useMutation(
    () => deletePost(id ?? "", postId ?? ""),
    {
      onSuccess: () => queryClient.invalidateQueries(["getPostData"]),
    },
  );
  const closeModal = (event: {
    stopPropagation: () => void;
    currentTarget: any;
    target: any;
  }) => {
    event.stopPropagation();
    const div = event.currentTarget;
    if (event.target === div) {
      setIsModalState(false);
    }
  };

  const onClickDeleteButton = React.useCallback(
    (event: {
      stopPropagation: () => void;
      currentTarget: any;
      target: any;
    }) => {
      event.stopPropagation();
      const div = event.currentTarget;
      if (event.target === div) {
        deletePostList();
      }
      setIsModalState(false);
    },
    [deletePostList],
  );

  return (
    <ModalBg onClick={closeModal}>
      <ModalWrap>
        <ModalTitle>정말로 삭제하시겠습니까?</ModalTitle>
        <ModalExp>삭제하면 되돌릴 수 없어요! :(</ModalExp>
        <BtnWrap>
          <CancelBtn onClick={() => setIsModalState(false)}>취소</CancelBtn>
          <BasicBtn onClick={onClickDeleteButton}>삭제</BasicBtn>
        </BtnWrap>
      </ModalWrap>
    </ModalBg>
  );
};

export default DeleteModal;
