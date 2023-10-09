import React, { createContext, useContext, useState, useEffect } from "react";
// import { useChromeStorageLocal } from "use-chrome-storage";

const SettingsContext = createContext();

export const useSettings = () => {
    return useContext(SettingsContext);
};

// export const SettingsProvider = ({ children }) => {
//     const [settings, setSettings] = useState({
//         cryptoWidgetVisible: true,
//         weatherWidgetVisible: true,
//         weatherCity: "Paris",
//         pseudonyme: "there"
//     });

//     const [value, setValue, isPersistent, error] = useChromeStorageLocal(
//         "settings",
//         settings
//     );

//     const updateSettings = (updatedSettings) => {
//         const newSettings = { ...settings, ...updatedSettings };
//         setSettings(newSettings);
//         setValue(newSettings);
//     };

//     useEffect(() => {
//         setSettings(value);
//     }, [value]);

//     return (
//         <SettingsContext.Provider value={{ settings, updateSettings }}>
//             {children}
//         </SettingsContext.Provider>
//     );
// };

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