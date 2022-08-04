const { Kakao } = window;

const kakaoShare = () => {
  if (!Kakao.isInitialized()) {
    Kakao.init("7407a27ef864aaf8a5af6933a8b35200");
  }

  Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "롤링페이지",
      description: "소중한 사람에게 마음을 전하세요.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/09/15/22/23/fountain-pen-447576_960_720.jpg",
      link: {
        mobileWebUrl: "https://developers.kakao.com",
        androidExecutionParams: "test",
      },
    },
    itemContent: {
      profileText: "Rollingpage",
      profileImageUrl:
        "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
    buttons: [
      {
        title: "웹으로 이동",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
        },
      },
    ],
  });
};

export default kakaoShare;
