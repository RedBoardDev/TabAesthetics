import React, { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

export const useSettings = () => {
    return useContext(SettingsContext);
};

export const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState({
        cryptoWidgetVisible: true,
        weatherWidgetVisible: true,
        weatherCity: "Paris",
        pseudonyme: "there"
    });

    const updateSettings = (updatedSettings) => {
        setSettings({ ...settings, ...updatedSettings });
    };

    return (
        <SettingsContext.Provider value={{ settings, updateSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};
