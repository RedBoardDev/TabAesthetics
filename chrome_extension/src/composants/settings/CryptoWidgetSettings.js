import axios from "axios";
import React, { useEffect, useState } from "react";
import { Paper, Switch, FormControlLabel, TextField, Button, Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useSettings } from "./SettingsContext";

const CryptoWidgetSettings = () => {
    const { settings, updateSettings } = useSettings();
    const [tempCryptoCurrencyList, setTempCryptoCurrencyList] = useState(settings.cryptoCurrencyList);
    const [availableCoin, setAvailableCoin] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filteredCoins, setFilteredCoins] = useState([]);

    useEffect(() => {
        const getCoinsData = () => {
            axios({
                method: "GET",
                url: `https://api.coingecko.com/api/v3/coins/list`,
            })
                .then((response) => {
                    setAvailableCoin(response.data);
                })
                .catch((error) => {
                    console.error("Error: ", error);
                });
        };
        getCoinsData();
    }, []);

    const toggleCryptoWidget = () => {
        updateSettings({
            cryptoWidgetVisible: !settings.cryptoWidgetVisible,
        });
    };

    const handleSaveCryptoCurrencyList = (coin) => {
        if (!tempCryptoCurrencyList.includes(coin.id)) {
            const updatedCryptoList = [...tempCryptoCurrencyList, coin.id];
            setTempCryptoCurrencyList(updatedCryptoList);

            updateSettings({
                cryptoCurrencyList: updatedCryptoList,
            });
            handleClearSearch();
        }
    };

    const handleSearch = (value) => {
        setSearchValue(value);
        const filtered = availableCoin.filter(coin =>
            coin.symbol.toLowerCase() === value.toLowerCase() ||
            coin.name.toLowerCase() === value.toLowerCase()
        );
        setFilteredCoins(filtered);
    };

    const handleRemoveCoin = (coinId) => {
        if (tempCryptoCurrencyList.includes(coinId)) {
            const updatedCryptoList = tempCryptoCurrencyList.filter(id => id !== coinId);
            setTempCryptoCurrencyList(updatedCryptoList);

            updateSettings({
                cryptoCurrencyList: updatedCryptoList,
            });
        }
    };

    const handleClearSearch = () => {
        setSearchValue('');
    };


    return (
        <Box>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Crypto Widget Settings
            </Typography>
            <FormControlLabel
                control={
                    <Switch
                        checked={settings.cryptoWidgetVisible}
                        onChange={toggleCryptoWidget}
                        color="primary"
                    />
                }
                label="Show Crypto Widget"
            />

            <Box mt={3} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginBottom: 2 }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            border: "1px solid #ccc",
                            borderRadius: 2,
                            padding: "6px",
                            width: "100%",
                            margin: "auto",
                        }}
                    >
                        <SearchIcon sx={{ color: "gray", marginRight: 1 }} />
                        <TextField
                            label="Search Coins (by symbol, or by name)"
                            value={searchValue}
                            onChange={(event) => handleSearch(event.target.value)}
                            variant="standard"
                            fullWidth
                            sx={{ flex: 1 }}
                        />
                        {searchValue && (
                            <CloseIcon sx={{ color: "gray", cursor: "pointer" }} onClick={handleClearSearch} />
                        )}
                    </Box>
                    {searchValue && filteredCoins.length > 0 && (
                        <Paper elevation={3} sx={{ width: "90%", margin: "auto", marginTop: 2, maxHeight: 200, overflow: 'auto' }}>
                            <List component="nav" aria-label="filtered coins">
                                {filteredCoins.map((coin) => (
                                    <ListItem button key={coin.id} onClick={() => handleSaveCryptoCurrencyList(coin)}>
                                        <ListItemText primary={`${coin.name} (${coin.symbol}) - ${coin.id}`} />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    )}
                </Box>
                {tempCryptoCurrencyList.length > 0 && (
                    <Box width="90%" sx={{ margin: "auto", borderRadius: 4, padding: 1, marginBottom: 2 }}>
                        <Typography variant="h6" sx={{ marginBottom: 1 }}>Selected Coins</Typography>
                        {tempCryptoCurrencyList.map((coinId, index) => (
                            <Box key={coinId} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography>{coinId}</Typography>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    onClick={() => handleRemoveCoin(coinId)}
                                    sx={{ textTransform: "none" }}
                                >
                                    Remove
                                </Button>
                            </Box>
                        ))}
                    </Box>
                )}
            </Box>

        </Box>
    );
};

export default CryptoWidgetSettings;
