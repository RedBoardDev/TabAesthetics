import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";

const LastTabBox = ({ tabName }) => {
    // const [coinData, setCoinData] = useState(null);

    // useEffect(() => {
    //     const getCoinsData = () => {
    //         if (!tabName) {
    //             return;
    //         }
    //         axios({
    //             method: "GET",
    //             url: `https://api.coingecko.com/api/v3/coins/${tabName}`,
    //         })
    //             .then((response) => {
    //                 setCoinData(response.data);
    //             })
    //             .catch((error) => {
    //                 console.error("Error: ", error);
    //             });
    //     };
    //     getCoinsData();
    // }, [tabName]);

    // if (!coinData) {
    //     return null;
    // }

    const boxStyle = {
        width: "54px",
        height: "54px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "0.5rem",
        padding: "0.5rem",
        borderRadius: "8px",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#1e2029",
    };

    const tabNameStyle = {
        color: "white",
        marginTop: "0.5rem",
        textAlign: "center",
    };

    return (
        <div>
            <Box
                key={tabName}
                sx={boxStyle}
            >
                <Box>
                    <img
                        src={`chrome://favicon/size/64@1x/https://mail.google.com/mail/u/0/#inbox`}
                        alt={`${tabName} logo`}
                        style={{ width: "42px", height: "42px" }}
                    />
                </Box>
            </Box>
            <Typography variant="body1" sx={tabNameStyle}>{tabName}</Typography>
        </div>
    );
};

export default LastTabBox;
