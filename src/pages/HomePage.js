import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

function HomePage() {
    const navigate = useNavigate();

    const move = (page) => {
        navigate("/" + page);
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
                Juhee's Web
            </Typography>
            <br />
            <br />
            <br />
            <br />
            <Stack spacing={5}>
                <Button
                    onClick={(e) => move("memo")}
                    variant="contained"
                    size="large"
                    color="secondary"
                >
                    1. Memo
                </Button>
                <Button
                    onClick={(e) => move("rock-scissors-paper")}
                    variant="contained"
                    size="large"
                    color="secondary"
                >
                    2. Rock-Scissors-Paper
                </Button>
                <Button
                    onClick={(e) => move("russian-roulette")}
                    variant="contained"
                    size="large"
                    color="secondary"
                >
                    3. Russian-Roulette
                </Button>
            </Stack>
        </div>
    );
}

export default HomePage;
