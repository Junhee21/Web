import React, { useEffect, useState, useRef } from "react";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import Typography from "@mui/material/Typography";
import Template from "../components/Template";

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

const RockScissorsPaperPage = () => {
  const [partner, setPartner] = useState(randomPick());
  const [strPartner, setStrPartner] = useState("Rock! Scissors! Paper!");

  useEffect(() => { alert(strPartner); }, [strPartner]);

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

  const result = (num, partner) => {
    if (num === 0) {
      setStrPartner("Computer is " + transNumToStr(partner) + "\nDrow!");
    } else if (num === 1) {
      setStrPartner("Computer is " + transNumToStr(partner) + "\nVictory!");
    } else {
      setStrPartner("Computer is " + transNumToStr(partner) + "\nDefeat!");
    }
  };

  return (
    <Template now="rock-scissors-paper">
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "200px"
      }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Rock! Scissors! Paper!
        </Typography>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Typography variant="h3" component="h1" gutterBottom>
          Choose one
        </Typography>
        <br />
        <ButtonGroup
          aria-label="vertical outlined button group"
          variant="outlined"
          size="large"
          color="secondary"
        >
          <Button onClick={(e) => rcpPick(0)}>Rock</Button>
          <Button onClick={(e) => rcpPick(1)}>Scissors</Button>
          <Button onClick={(e) => rcpPick(2)}>Paper</Button>
        </ButtonGroup>
      </div>
    </Template>
  );
}

export default RockScissorsPaperPage;