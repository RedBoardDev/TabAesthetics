import React, { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import backgroundImage from './assets/background.jpg';
import TimeDisplay from './composants/TimeDisplay';
import WeatherWidget from './composants/WeatherWidget';
import CryptoWidget from './composants/CryptoWidget';

function App() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error) => {
                    console.error('Erreur de géolocalisation', error);
                }
            );
        } else {
            console.error("La géolocalisation n'est pas prise en charge par ce navigateur");
        }
    }, []);

    const paperStyles = {
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <Paper style={paperStyles}>
            <TimeDisplay />
            <WeatherWidget latitude={latitude} longitude={longitude} />
            <CryptoWidget />
        </Paper>
    );
}

export default App;
