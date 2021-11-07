import React, { useEffect, useState, useRef } from "react";
import "./styles.css";

const randomPick = (maxNum) => {
  return parseInt(Math.random() * maxNum) + 1;
};

const btnStyle = {
  color: "white",
  background: "black",
  padding: ".375rem .75rem",
  border: "1px solid teal",
  borderRadius: ".8rem",
  fontSize: "1rem",
  lineHeight: 1.5
};

export default function App() {
  const [cnt, setCnt] = useState(0);
  const [gameCnt, setGameCnt] = useState(randomPick(10));

  const checkResult = () => {
    if (cnt == gameCnt) {
      alert("YOU DIE!!!!");
      setCnt(0);
      setGameCnt(randomPick(10));
      return;
    } else {
      setCnt(cnt + 1);
      console.log("safe");
    }
  };
  return (
    <div>
      <h1>Russian Roulette</h1>
      <br />
      <br />
      <div>How many : {cnt}</div>
      <br />
      <button style={btnStyle} onClick={(e) => checkResult()}>
        Button
      </button>
    </div>
  );
}