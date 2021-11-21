import React, { useEffect, useState, useRef } from "react";
import Template from "../components/Template";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Snackbar } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { sizeWidth } from "@mui/system";

const MemoPage = () => {
  const navigate = useNavigate();
  const [memoList, setMemoList] = useState(() => {
    const saved = localStorage.getItem("memoList");
    return JSON.parse(saved) || [];
  });

  const move = (page) => {
    navigate("/" + page);
  }

  return (
    <div>
      <Template now="memo">
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px",
        }}
        >
          {memoList.map((x) => {
            return (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="body1">
                    {x.title}[{x.id}]
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <IconButton >
                    <EditOutlinedIcon fontSize="small" />
                  </IconButton>
                  <Typography variant="body2">{x.content}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
          <Button
            onClick={(e) => move("memo-create")}
            variant="contained"
            color="secondary"
            sx={{
              maxWidth: 700,
              minWidth: 700
            }}
          >
            create memo
          </Button>
        </div>
      </Template>
    </div>
  );
}


export default MemoPage;