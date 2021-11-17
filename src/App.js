import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

function App() {
  const navigate = useNavigate();
  const memo = () => {
    navigate("/memo");
  }
  const rockScissorspaper = () => {
    navigate("/rock-scissors-paper");
  }
  const russianRoulette = () => {
    navigate("/russian-roulette");
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "100px"
    }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Hello!
      </Typography>
      <br />
      <br />
      <br />
      <br />
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
        variant="outlined"
        color="secondary"
        size="large"
      >
        <Button onClick={memo}>
          1. Memo
        </Button>
        <Button onClick={rockScissorspaper}>
          2. Rock-Scissors-Paper
        </Button>
        <Button onClick={russianRoulette}>
          3. Russian-Roulette
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
