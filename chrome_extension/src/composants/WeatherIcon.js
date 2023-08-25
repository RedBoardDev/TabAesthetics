import React from "react";

const WeatherIcon = ({ iconName }) => {
    const getIconUrl = (iconCode) => {
        return `weather/${iconCode}.svg`;
    };
    return <img src={getIconUrl(iconName)} alt="Weather Icon" />;
};

export default WeatherIcon;
