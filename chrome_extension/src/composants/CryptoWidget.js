import React, { useState } from "react";
import { Paper } from "@mui/material";
import CryptoWidgetBox from './CryptoWidgetBox';
import { useSettings } from "./SettingsContext";

const CryptoWidget = () => {
    const [selectedCryptoCurrency, setSelectedCryptoCurrency] = useState([
        "bitcoin",
        "ethereum",
        "pluton",
        "dogecoin",
    ]);

    const { settings } = useSettings();
    if (!settings.cryptoWidgetVisible) return;
    return (
        <Paper
            sx={{
                position: "fixed",
                bottom: "1rem",
                right: "1rem",
                paddingRight: "0.4rem",
                backgroundColor: "rgba(255, 255, 255, 0.0)",
                borderRadius: "16px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0)",
                width: "300px",
            }}
        >
            {selectedCryptoCurrency && selectedCryptoCurrency.map((coinName) => (
                <CryptoWidgetBox key={coinName} coinName={coinName} />
            ))}
        </Paper>
    );
};

export default CryptoWidget;
