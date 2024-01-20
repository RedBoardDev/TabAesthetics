import React, { useState, useEffect } from "react";
import { Typography, Paper, Input } from "@mui/material";
import { useSettings } from "./settings/SettingsContext";
import axios from "axios";

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            onSearch(searchQuery);
        }
    };

    return (
        <Input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            sx={{
                marginBottom: "1rem",
                backgroundColor: "#1e2029",
                color: "white",
                borderRadius: "8px",
                padding: "0.5rem",
            }}
        />
    );
};

const QuoteWidget = () => {

    const handleSearch = (query) => {
        window.open(`https://www.google.com/search?q=${query}`);
    };

    return (
        <Paper
            sx={{
                position: "fixed",
                bottom: "1rem",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#1e2029",
                borderRadius: "16px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                width: "300px",
                textAlign: "center",
            }}
        >
            <SearchBar onSearch={handleSearch} />
                <Typography variant="body1" sx={{ color: "white" }}>
                </Typography>
        </Paper>
    );
};

export default QuoteWidget;
