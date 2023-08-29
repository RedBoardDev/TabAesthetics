import React, { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import TimeDisplay from './composants/TimeDisplay';
import WeatherWidget from './composants/WeatherWidget';
import CryptoWidget from './composants/CryptoWidget';

function App() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [backgroundImage, setBackgroundImage] = useState(null);

    const fetchRandomImage = () => {
        const width = 1920;
        const height = 1080;
        const imageUrl = `https://picsum.photos/${width}/${height}?random`;
        setBackgroundImage(imageUrl);
    };


    useEffect(() => {
        fetchRandomImage();

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
        backgroundImage: `
            linear-gradient(
                rgba(0, 0, 0, 0.3),
                rgba(0, 0, 0, 0.3)
            ),
            url(${backgroundImage})
        `,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0,
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
