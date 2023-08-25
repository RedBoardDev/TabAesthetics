import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WeatherIcon from "./WeatherIcon";

const WeatherWidget = ({ latitude, longitude }) => {
  const [temperature, setTemperature] = useState("");
  const [name, setName] = useState("");
  const [wicon, setWicon] = useState("");

  useEffect(() => {
    const getWeatherData = () => {
      if (!latitude || !longitude) {
        return;
      }

      axios({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e203317f0df5474c05874e35b030eda3`,
      })
        .then((response) => {
          setTemperature(Math.round(response.data.main.temp - 273.15));
          setName(response.data.name);
          setWicon(response.data.weather[0].icon);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération de la météo :", error);
        });
    };

    getWeatherData();
  }, [latitude, longitude]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        padding: "1rem",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
        color: "#fff",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <WeatherIcon iconName={wicon} />
        <Typography variant="h4" sx={{ marginLeft: "0.5rem" }}>
          {temperature}&deg;C
        </Typography>
      </Box>
      <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.2rem" }}>
        {name}
      </Typography>
    </Box>
  );
};

export default WeatherWidget;
