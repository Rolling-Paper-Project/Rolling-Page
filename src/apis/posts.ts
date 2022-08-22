import axiosInstance from ".";

export const addBoard = async (title: string) => {
  const res = await axiosInstance.post("/post", {
    post: {
      content: title,
      image: "",
    },
  });
  return res.data.post;
};


export const getBoardTitle = async (id: string) => {
  const res = await axiosInstance.get(`/post/${id}`);
  return res.data.post;
};

export const getPostData = async (boardId: string) => {
  const res = await axiosInstance.get(
    `/post/${boardId}/comments/?limit=infinite`,
  );
  return res.data.comments;
};

export const deletePost = async (boardId: string, postId: string) => {
  await axiosInstance.delete(`/post/${boardId}/comments/${postId}`);
};

export const addPost = async (contents: string[], boardId: string) => {
  const text = contents.join("☇⚁♘");
  await axiosInstance.post(`/post/${boardId}/comments`, {
    comment: {
      content: text,
    },
  });
};

export default { getBoardTitle, getPostData, deletePost, addPost };
