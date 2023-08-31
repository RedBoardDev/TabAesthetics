import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { useSettings } from "./SettingsContext";

function TimeText({ currentTime }) {
    const [currentPeriod, setCurrentPeriod] = useState("");
    const { settings } = useSettings();

    const subTextStyles = {
        fontSize: '3.5rem',
        color: 'white',
        marginTop: '-2.5rem',
    };

    useEffect(() => {
        const hours = currentTime.getHours();
        if (hours < 12)
            setCurrentPeriod('morning');
        else if (hours >= 12 && hours < 18)
            setCurrentPeriod('afternoon');
        else if (hours >= 18)
            setCurrentPeriod('evening');
    }, [currentTime]);

    return (
        <Typography variant="body1" component="div" style={subTextStyles}>
            Good {currentPeriod}, {settings.pseudonyme}
        </Typography>
    );
}

export default TimeText;
