import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const CryptoWidget = ({ currentTab, setCurrentTab }) => {

    return (
        <List
            component="nav"
            sx={{
                width: "20%",
                borderRight: "1px solid #e0e0e0",
                backgroundColor: "#fff",
            }}
        >
            <ListItem
                button
                onClick={() => setCurrentTab(0)}
                selected={currentTab === 0}
                sx={{
                    backgroundColor: currentTab === 0 ? "#e0e0e0" : "inherit",
                }}
            >
                <ListItemText primary="Weather Widget" />
            </ListItem>
            <ListItem
                button
                onClick={() => setCurrentTab(1)}
                selected={currentTab === 1}
                sx={{
                    backgroundColor: currentTab === 1 ? "#e0e0e0" : "inherit",
                }}
            >
                <ListItemText primary="Crypto Widget" />
            </ListItem>
            <ListItem
                button
                onClick={() => setCurrentTab(2)}
                selected={currentTab === 2}
                sx={{
                    backgroundColor: currentTab === 2 ? "#e0e0e0" : "inherit",
                }}
            >
                <ListItemText primary="Other" />
            </ListItem>
        </List>
    );
};

export default CryptoWidget;
