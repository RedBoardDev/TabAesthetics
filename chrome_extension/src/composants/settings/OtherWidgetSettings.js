import React, { useState } from "react";
import { TextField, Button, Box, Typography } from '@mui/material';
import { useSettings } from "./SettingsContext";

const OtherWidgetSettings = () => {
    const { settings, updateSettings } = useSettings();
    const [tempPseudonyme, setTempPseudonyme] = useState(settings.pseudonyme);

    const handleSavePseudonyme = () => {
        updateSettings({
            pseudonyme: tempPseudonyme,
        });
    };

    return (
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
    );
};

export default OtherWidgetSettings;
