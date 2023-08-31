import React, { useState } from "react";
import { Dialog, DialogTitle, Switch, FormControlLabel, TextField, Button, Box, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useSettings } from "./SettingsContext";
import CloseIcon from '@mui/icons-material/Close';

const SettingsWidget = ({ open, onClose }) => {
    const { settings, updateSettings } = useSettings();
    const [tempWeatherCity, setTempWeatherCity] = useState(settings.weatherCity);
    const [tempPseudonyme, setTempPseudonyme] = useState(settings.pseudonyme);
    const [currentTab, setCurrentTab] = useState(0);

    const toggleCryptoWidget = () => {
        updateSettings({
            cryptoWidgetVisible: !settings.cryptoWidgetVisible,
        });
    };

    const toggleWeatherWidget = () => {
        updateSettings({
            weatherWidgetVisible: !settings.weatherWidgetVisible,
        });
    };

    const handleSaveWeather = () => {
        updateSettings({
            weatherCity: tempWeatherCity,
        });
    };

    const handleSavePseudonyme = () => {
        updateSettings({
            pseudonyme: tempPseudonyme,
        });
    };

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

                        <Divider />
                        <Box p={3} flexGrow={1} bgcolor="#fff">
                            {currentTab === 0 && (
                                <Box>
                                    <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                        Weather Widget Settings
                                    </Typography>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={settings.weatherWidgetVisible}
                                                onChange={toggleWeatherWidget}
                                                color="primary"
                                            />
                                        }
                                        label="Show Weather Widget"
                                    />
                                    {settings.weatherWidgetVisible && (
                                        <Box mt={3}>
                                            <TextField
                                                label="Enter Default City"
                                                value={tempWeatherCity}
                                                onChange={(event) =>
                                                    setTempWeatherCity(event.target.value)
                                                }
                                                variant="outlined"
                                                fullWidth
                                            />
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={handleSaveWeather}
                                                sx={{ mt: 2 }}
                                            >
                                                Save
                                            </Button>
                                        </Box>
                                    )}
                                </Box>
                            )}
                            {currentTab === 1 && (
                                <Box>
                                    <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                        Crypto Widget Settings
                                    </Typography>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={settings.cryptoWidgetVisible}
                                                onChange={toggleCryptoWidget}
                                                color="primary"
                                            />
                                        }
                                        label="Show Crypto Widget"
                                    />
                                    {/* Crypto widget settings */}
                                </Box>
                            )}
                            {currentTab === 2 && (
                                <Box>
                                    <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                        Other Settings
                                    </Typography>
                                    <TextField
                                        label="Enter your name"
                                        value={tempPseudonyme}
                                        onChange={(event) =>
                                            setTempPseudonyme(event.target.value)
                                        }
                                        variant="outlined"
                                        fullWidth
                                        sx={{ marginBottom: 2 }}
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleSavePseudonyme}
                                    >
                                        Save
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Dialog>
        </Dialog>
    );
};

export default SettingsWidget;
