import React, { useState } from "react";
import { Paper } from "@mui/material";
import LastTabBox from './LastTabBox';
import { useSettings } from "./SettingsContext";

const LastTabWidget = () => {
    const { settings } = useSettings();
    const [lastTabs, setLastTabs] = useState([
        "https://www.youtube.com/",
        "https://chat.openai.com/",
        "https://intra.epitech.eu/",
        "https://github.com/",
    ]);


    const flexContainerStyle = {
        display: "flex",
        flexDirection: "row",
        gap: "16px",
    };

    return (
        <Paper
            sx={{
                position: "fixed",
                top: "6rem",
                left: "2rem",
                paddingRight: "0.4rem",
                backgroundColor: "rgba(255, 255, 255, 0.0)",
                borderRadius: "16px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0)",
                height: "100px",
            }}
        >
            <div style={flexContainerStyle}>
                {lastTabs.map((coinName) => (
                    <LastTabBox key={coinName} coinName={coinName} />
                ))}
            </div>
        </Paper>
    );
};

export default LastTabWidget;
