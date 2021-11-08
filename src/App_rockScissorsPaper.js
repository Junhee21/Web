import "./styles.css";
import React, { useEffect, useState, useRef } from "react";

const randomPick = () => {
  return parseInt(Math.random() * 3);
};

const transNumToStr = (partner) => {
  if (partner === 0) {
    return "Rock";
  } else if (partner === 1) {
    return "Scissors";
  } else {
    return "Paper";
  }
};

export default function App() {
  const [partner, setPartner] = useState(randomPick());
  const [strPartner, setStrPartner] = useState("Rock! Scissors! Paper!");
  useEffect(() => {
    alert(strPartner);
  }, [strPartner]);

  const rcpPick = (num) => {
    setPartner(randomPick());
    if (num === partner) {
      result(0, partner);
    } else if (num === 0) {
      partner === 1 ? result(1, partner) : result(2, partner);
    } else if (num === 1) {
      partner === 2 ? result(1, partner) : result(2, partner);
    } else {
      partner === 0 ? result(1, partner) : result(2, partner);
    }
  };

  const result = (num, Partner) => {
    if (num === 0) {
      setStrPartner("Computer is " + transNumToStr(partner) + "\nDrow!");
    } else if (num === 1) {
      setStrPartner("Computer is " + transNumToStr(partner) + "\nVictory!");
    } else {
      setStrPartner("Computer is " + transNumToStr(partner) + "\nDefeat!");
    }
  };

  return (
    <div className="App">
      <h1>Rock! Scissors! Paper!</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <> Choose! </>
      <br />
      <div class="btn-group">
        <button onClick={(e) => rcpPick(0)}>Rock</button>
        <button onClick={(e) => rcpPick(1)}>Scissors</button>
        <button onClick={(e) => rcpPick(2)}>Paper</button>
      </div>
      <br />
      <br />
    </div>
  );
}
