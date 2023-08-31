import React from "react";
import { Paper, IconButton } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

const SettingsButton = ({ onClick }) => {
    return (
        <Paper
            sx={{
                position: "fixed",
                top: "1rem",
                left: "1rem",
                backgroundColor: "rgba(255, 255, 255, 0.0)",
                borderRadius: "16px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0)",
                display: "flex",
                alignItems: "center",
            }}
        >
            <IconButton sx={{ color: "#ffffff" }} onClick={onClick}>
                <SettingsIcon />
            </IconButton>
        </Paper>
    );
};

export default SettingsButton;
