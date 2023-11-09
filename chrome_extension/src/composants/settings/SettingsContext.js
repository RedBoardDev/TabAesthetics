import React, { createContext, useContext, useState } from "react";
// import { useChromeStorageLocal } from "use-chrome-storage";

const SettingsContext = createContext();

export const useSettings = () => {
    return useContext(SettingsContext);
};

export const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState({
        cryptoWidgetVisible: true,
        weatherWidgetVisible: true,
        weatherCity: "Paris",
        pseudonyme: "there",
        cryptoCurrencyList: ["bitcoin", "ethereum"]
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
