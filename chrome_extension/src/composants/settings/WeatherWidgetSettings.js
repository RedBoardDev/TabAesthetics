import React, { useState } from "react";
import { Switch, TextField, Button, Box, Typography, FormControlLabel } from '@mui/material';
import { useSettings } from "./SettingsContext";

const WeatherWidgetSettings = () => {
    const { settings, updateSettings } = useSettings();
    const [tempWeatherCity, setTempWeatherCity] = useState(settings.weatherCity);

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

    return (
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
    );
};

export default WeatherWidgetSettings;
