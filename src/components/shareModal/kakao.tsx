const kakaoShare = (selectedURL: string) => {
  const { Kakao } = window;
  if (!Kakao.isInitialized()) {
    Kakao.init("7407a27ef864aaf8a5af6933a8b35200");
  }

  Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "롤링페이지",
      description: "소중한 사람에게 마음을 전하세요.",
      imageUrl: "https://mandarin.api.weniv.co.kr/1659677435300.png",
      link: {
        mobileWebUrl: "https://developers.kakao.com",
        androidExecutionParams: "test",
      },
    },
    itemContent: {
      profileText: "Rollingpage",
      profileImageUrl: "https://mandarin.api.weniv.co.kr/1659629333953.png",
    },
    buttons: [
      {
        title: "웹으로 이동",
        link: {
          mobileWebUrl: selectedURL,
        },
      },
    ],
  });
};

export default kakaoShare;
