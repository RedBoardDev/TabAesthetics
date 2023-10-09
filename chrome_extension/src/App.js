import React, { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import TimeDisplay from './composants/TimeDisplay';
import WeatherWidget from './composants/WeatherWidget';
import CryptoWidget from './composants/CryptoWidget';
import SettingsButton from "./composants/SettingsButton";
import SettingsWidget from "./composants/SettingsWidget";
import { SettingsProvider } from "./composants/SettingsContext";
import LastTabWidget from './composants/LastTabWidget';

function App() {
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState(null);

    const fetchRandomImage = () => {
        const width = 1920;
        const height = 1080;
        const imageUrl = `https://picsum.photos/${width}/${height}?random`;
        setBackgroundImage(imageUrl);
    };

    useEffect(() => {
        fetchRandomImage();
    }, []);

    const handleSettingsOpen = () => {
        setSettingsOpen(true);
    };

    const handleSettingsClose = () => {
        setSettingsOpen(false);
    };

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
        <SettingsProvider>
            <Paper style={paperStyles}>
                <SettingsButton onClick={handleSettingsOpen} />
                <SettingsWidget open={settingsOpen} onClose={handleSettingsClose} />
                <TimeDisplay />
                <WeatherWidget />
                <CryptoWidget />
                <LastTabWidget />
            </Paper>
        </SettingsProvider>
    );
}

export default App;
