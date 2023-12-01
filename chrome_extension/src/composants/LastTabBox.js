import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const LastTabBox = ({ tabData }) => {
    const [favicon, setFavicon] = useState(null);
    const [title, setTitle] = useState(null);

    const getFavicon = (url) => {
        setFavicon(`https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=64`);
    };

    useEffect(() => {
        const title = (tabData.title).length > (9 + 4) ? `${(tabData.title).substring(0, (6 + 4))}...` : (tabData.title);
        setTitle(title);
        getFavicon(tabData.url);
    }, [tabData]);

    return (
        <Box>
            <Box
                key={title}
                sx={{
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
                }}
            >
                {favicon && (
                    <img
                        src={favicon}
                        alt={`${title} logo`}
                        style={{ width: "42px", height: "42px" }}
                    />
                )}
            </Box>
            <Typography variant="body1" sx={{
                color: "white",
                marginTop: "0.5rem",
                textAlign: "center",
                fontSize: '0.8rem',
            }}>
                {title}</Typography>
        </Box>
    );


};

export default LastTabBox;
