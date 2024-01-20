import React, { useState } from "react";
import { Dialog, DialogTitle, Box, Divider } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import WeatherWidgetSettings from "./WeatherWidgetSettings";
import OtherWidgetSettings from "./OtherWidgetSettings";
import SettingsMenu from "./SettingsMenu";
import CryptoWidgetSettings from "./CryptoWidgetSettings";

const SettingsWidget = ({ open, onClose }) => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <Dialog open={open} onClose={onClose}>
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                }}
                onClick={onClose}
            />
            <Dialog
                open={open}
                onClose={onClose}
                PaperProps={{
                    style: {
                        backgroundColor: "#f7f7f7",
                        width: "800px",
                        height: "500px",
                        borderRadius: "10px",
                        overflow: "hidden",
                    },
                }}
            >
                <Box display="flex" flexDirection="column" height="100%">
                    <DialogTitle>
                        Customize Dashboard
                        <CloseIcon style={{ cursor: "pointer", position: "absolute", top: 10, right: 10 }} onClick={onClose} />
                    </DialogTitle>

                    <Box display="flex" flexGrow={1}>
                        {
                            SettingsMenu({ currentTab, setCurrentTab })
                        }

                        <Divider />
                        <Box p={3} flexGrow={1} bgcolor="#fff">
                            {currentTab === 0 && (
                                WeatherWidgetSettings()
                            )}
                            {/* {currentTab === 1 && (
                                // crypto component
                                CryptoWidgetSettings()
                            )} */}
                            {currentTab === 2 && (
                                OtherWidgetSettings()
                            )}
                        </Box>
                    </Box>
                </Box>
            </Dialog>
        </Dialog>
    );
};

export default SettingsWidget;
