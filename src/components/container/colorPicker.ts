const colorPicker = () => {
  const colorArray = [
    "#E5EDFF, #B6CCFF",
    "#FBF1F6, #F9CCE3",
    "#EAE7F5, #CBC2FA",
    "#FCF6D8, #FCEEAB",
  ];
  const randomIdx = Math.floor(Math.random() * 3 + 1);
  const randomColor = colorArray[randomIdx].split(",");
  const bgColor = randomColor[0];
  const shadowColor = randomColor[1];

  return [bgColor, shadowColor];
};

export default colorPicker;
