import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

const style = {
    width: "100%",
    maxWidth: 180,
    minWidth: 180,
    bgcolor: "rgb(249, 231, 253)",
    height: "100vh",
};

const Navigation = ({ now }) => {
    let navigate = useNavigate();

    const move = (page) => {
        navigate("/" + page);
    };

    const arrIndex = [0, 1, 2, 3];
    const arrName = ["Home", "Memo", "R.S.P.", "Roulette"];
    const arrUrl = ["", "memo", "rock-scissors-paper", "russian-roulette"];

    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem>
                <ListItemText>
                    Junhee's Web
                </ListItemText>
            </ListItem>
            <Divider />
            <Divider />
            <Divider />
            {arrIndex.map((x) => {
                if (arrUrl[x] === now) {
                    return (
                        <ListItem
                            button
                            divider
                            onClick={(e) => move(arrUrl[x])}
                            sx={{
                                bgcolor: "rgb(200,162,243)",
                                color: "white"
                            }}
                        >
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={arrName[x]} />
                        </ListItem>
                    );
                } else {
                    return (
                        <ListItem
                            button
                            divider
                            onClick={(e) => move(arrUrl[x])}
                        >
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={arrName[x]} />
                        </ListItem>
                    );
                }
            })}
        </List>
    );
}

export default Navigation;