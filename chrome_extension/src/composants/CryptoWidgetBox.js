import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, Paper } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const CryptoWidgetBox = ({ coinName }) => {
    const [coinData, setCoinData] = useState(null);

    useEffect(() => {
        const getCoinsData = () => {
            if (!coinName) {
                return;
            }
            axios({
                method: "GET",
                url: `https://api.coingecko.com/api/v3/coins/${coinName}`,
            })
                .then((response) => {
                    setCoinData(response.data);
                })
                .catch((error) => {
                    console.error("Error: ", error);
                });
        };
        getCoinsData();
    }, [coinName]);

    if (!coinData) {
        return null;
    }

    return (
        <Box
            key={coinName}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
                padding: "0.5rem",
                borderRadius: "8px",
                boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
                backgroundColor: "rgba(240, 240, 240, 0.9)",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", marginLeft: "10px" }}>
                <Box>
                    <img
                        src={coinData.image.large}
                        alt={`${coinData.name} logo`}
                        style={{ width: "32px", height: "32px" }}
                    />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
                    <Typography variant="h6" fontWeight="bold">
                        {coinData.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {coinData.symbol}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "0.3rem" }}>
                    ${(coinData.market_data.current_price.usd).toFixed(3)}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: coinData.market_data.price_change_percentage_24h > 0
                            ? "rgba(0, 255, 0, 0.2)"
                            : coinData.market_data.price_change_percentage_24h < 0
                                ? "rgba(255, 0, 0, 0.2)"
                                : "rgba(0, 0, 0, 0.1)",
                        borderRadius: "8px",
                        padding: "0.2rem 0.5rem",
                        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            color:
                                coinData.market_data.price_change_percentage_24h > 0
                                    ? "green"
                                    : coinData.market_data.price_change_percentage_24h < 0
                                        ? "red"
                                        : "black",
                        }}
                    >
                        {coinData.market_data.price_change_percentage_24h > 0 ? (
                            <ArrowUpwardIcon sx={{ color: "green", verticalAlign: "top" }} />
                        ) : coinData.market_data.price_change_percentage_24h < 0 ? (
                            <ArrowDownwardIcon sx={{ color: "red", verticalAlign: "top" }} />
                        ) : (
                            <ArrowRightIcon sx={{ color: "black", verticalAlign: "top" }} />
                        )}
                        {(coinData.market_data.price_change_percentage_24h > 0 ? '+' : '') + coinData.market_data.price_change_percentage_24h.toFixed(2)}%
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default CryptoWidgetBox;
