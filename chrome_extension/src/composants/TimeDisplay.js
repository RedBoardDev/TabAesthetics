import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import TimeText from './TimeText';

function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

    const typographyStyles = {
        fontSize: '14rem',
        color: 'white',
        fontFamily: 'Lisu Bosa, sans-serif',
        fontWeight: 200,
        textAlign: 'center',
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Typography variant="h1" component="div" style={typographyStyles}>
                {formattedTime}
            </Typography>
            <TimeText currentTime={currentTime} />
        </div>
    );
}

export default Clock;
