import React, { useEffect, useState, useRef } from "react";
import Template from "../components/Template";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

const MemoPage = () => {
  const navigate = useNavigate();
  const [isDialog, setIsDialog] = useState(false);

  const [memoList, setMemoList] = useState(() => {
    const saved = localStorage.getItem("memoList");
    return JSON.parse(saved) || [];
  });

  const move = (page) => {
    navigate("/" + page);
  };

  const openDialog = () => {
    setIsDialog(true);
  };

  const closeDialog = () => {
    setIsDialog(false);
  };

  const deleteMemo = () => {
    localStorage.setItem("memoList", JSON.stringify([]));
    window.location.reload();
  };

  return (
    <div>
      <Template now="memo">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "100px",
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Memo List
          </Typography>
          <br />
          <br />
          <br />
          {memoList.map((x) => {
            return (
              <Accordion
                sx={{
                  maxWidth: 700,
                  minWidth: 700,
                }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5">
                    {x.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <IconButton>
                    <EditOutlinedIcon fontSize="small" />
                  </IconButton>
                  <Typography variant="h6">{x.content}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
          <br />
          <br />
          <br />
          <Button
            onClick={(e) => move("memo-create")}
            variant="contained"
            color="secondary"
            sx={{
              maxWidth: 200,
              minWidth: 200
            }}
          >
            create memo
          </Button>
          <br />
          <Button
            onClick={openDialog}
            variant="contained"
            color="secondary"
            sx={{
              maxWidth: 200,
              minWidth: 200
            }}
          >
            Delete memo
          </Button>
        </div>
        <Dialog
          open={isDialog}
          onClose={closeDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Do you want to delete every memo?"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={closeDialog}>No</Button>
            <Button onClick={deleteMemo} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Template>
    </div>
  );
};

export default MemoPage;