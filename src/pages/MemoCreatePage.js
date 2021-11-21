import React, { useEffect, useState, useRef } from "react";
import Template from "../components/Template";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Snackbar } from "@mui/material";

const style = {
    width: "100%",
    maxWidth: 700,
    minWidth: 700,
    bgcolor: "rgb(249, 231, 253)",
};

const MemoCreatePage = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [openSnackbar, setOpenSnackbar] = useState("false");

    const move = (page) => {
        navigate("/" + page);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };

    const createMemo = () => {
        const saved = localStorage.getItem("memoList");
        const currentMemoList = JSON.parse(saved) || [];
        currentMemoList.push({
            title: title,
            content: content
        });
        localStorage.setItem("memoList", JSON.stringify(currentMemoList));
        setOpenSnackbar("true");
    }

    return (
        <Template>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "100px"
                }}
            >
                <Typography variant="h2" component="h1" gutterBottom>
                    Create Memo
                </Typography>
                <br />
                <br />
                <br />
                <TextField
                    sx={style}
                    required
                    id="title"
                    label="title"
                    defaultValue=""
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <br />
                <TextField
                    sx={style}
                    multiline
                    rows={10}
                    required
                    id="content"
                    label="content"
                    defaultValue=""
                    onChange={(e) => setContent(e.target.value)}
                />
                <br />
                <Button
                    onClick={(e) => createMemo}
                    variant="contained"
                    color="secondary"
                    sx={{
                        maxWidth: 700,
                        minWidth: 700
                    }}
                >
                    create memo
                </Button>
                <br />
                <Button
                    onClick={(e) => move("memo")}
                    variant="contained"
                    color="secondary"
                    sx={{
                        maxWidth: 700,
                        minWidth: 700
                    }}
                >
                    memo list
                </Button>
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message="Created"
                />
            </div>
        </Template>
    )
};

export default MemoCreatePage;