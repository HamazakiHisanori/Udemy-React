import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShow, setFaceShow] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwithFaceShow = () => {
    setFaceShow(!faceShow);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShow || setFaceShow(true);
      } else {
        faceShow && setFaceShow(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>count</button>
      <p>{num}</p>
      <button onClick={onClickSwithFaceShow}>切り替え</button>
      {faceShow && <p>٩( ᐛ )و</p>}
    </>
  );
};

export default App;
