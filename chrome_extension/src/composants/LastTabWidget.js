import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import LastTabBox from './LastTabBox';
import { useSettings } from "./settings/SettingsContext";

/* global chrome */

const LastTabWidget = () => {
    const { settings } = useSettings();
    const [lastTabsData, setLastTabsData] = useState([]);

    const flexContainerStyle = {
        display: "flex",
        flexDirection: "row",
        gap: "16px",
    };

    useEffect(() => {
        const fetchLastTabs = () => {
            if (chrome && chrome.history) {
                chrome.history.search({ text: '', maxResults: 5 }, (historyItems) => {
                    setLastTabsData(historyItems);
                });
            } else {
                const simulatedHistoryItems = [
                    {
                        id: "32",
                        lastVisitTime: 1701440614041.923,
                        title: "Test 12345",
                        typedCount: 2,
                        url: "https://google.com/",
                        visitCount: 30,
                    },
                    {
                        id: "1277",
                        lastVisitTime: 1701439098170.95,
                        title: "Test 123456",
                        typedCount: 1,
                        url: "https://google.com/",
                        visitCount: 1,
                    },
                    {
                        id: "1",
                        lastVisitTime: 1701439078258.47,
                        title: "Test 1234567",
                        typedCount: 4,
                        url: "https://google.com/",
                        visitCount: 9,
                    },
                    {
                        id: "1276",
                        lastVisitTime: 1701439066951.148,
                        title: "Test 12345678",
                        typedCount: 1,
                        url: "https://google.com/",
                        visitCount: 1,
                    },
                    {
                        id: "1037",
                        lastVisitTime: 1701432838664.5269,
                        title: "Test 123456789",
                        typedCount: 0,
                        url: "https://google.com/",
                        visitCount: 3,
                    },
                ];

                setLastTabsData(simulatedHistoryItems);
            }
        };

        fetchLastTabs();
    }, []);

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
                {lastTabsData.map((tab) => (
                    <LastTabBox tabData={tab} />
                ))}
            </div>
        </Paper>
    );
};

export default LastTabWidget;
