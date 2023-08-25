import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Mise à jour toutes les secondes

        return () => clearInterval(interval);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

    const typographyStyles = {
        fontSize: '14rem',
        color: 'white',
        fontFamily: 'Lisu Bosa, sans-serif', // Utilise la police Lisu Bosa
        fontWeight: 200, // Poids ExtraLight (200),
        textAlign: 'center', // Centre le texte horizontalement
    };

    return (
        <Typography variant="h1" component="div" style={typographyStyles}>
            {formattedTime}
        </Typography>
    );
}

export default Clock;
