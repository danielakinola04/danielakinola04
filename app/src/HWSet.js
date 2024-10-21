import React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: { main: red[500] },
    secondary: { main: blue[500] },
  },
});

const HWSet = ({ name, amnt, capacity, onCheckIn, onCheckOut }) => {
  const handleCheckInClick = () => {
    onCheckIn(name, 1); // Call the custom event handler with the amount to check in (1 in this case)
  };

  const handleCheckOutClick = () => {
    onCheckOut(name, 1); // Call the custom event handler with the amount to check out (1 in this case)
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <h2 style={{ margin: '25px' }}>{name}:</h2>
        <h2 style={{ margin: '25px' }}>{amnt}/{capacity}</h2>
        <Button variant="contained" color="secondary" onClick={handleCheckInClick}>
          Check In
        </Button>
        <Button variant="contained" color="secondary" onClick={handleCheckOutClick}>
          Check Out
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default HWSet;
