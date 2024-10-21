import React, { useState } from 'react';
import HWSet from './HWSet';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const projectContainerStyle = {
  border: '1px solid black',
  padding: '40px',
  margin: '40px',
};

const horizontalAlign = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

const headingStyle = {
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontWeight: 'bold',
  fontSize: '24px',
};

const userHeadingStyle = {
  textTransform: 'capitalize',
  fontSize: '18px',
};

const Project = ({ name }) => {
  const [hwSetQuantities, setHWSetQuantities] = useState({
    HWSet1: 40,
    HWSet2: 0,
  });

  const [buttonColor, setButtonColor] = useState('red');

  const toggleButtonColor = () => {
    setButtonColor((prevColor) => (prevColor === 'red' ? 'blue' : 'red'));
  };

  const handleHWSetCheckOut = (hwSetName, quantity) => {
    setHWSetQuantities((prevQuantities) => ({
      ...prevQuantities,
      [hwSetName]: Math.max(prevQuantities[hwSetName] - quantity, 0),
    }));
  };

  const handleHWSetCheckIn = (hwSetName, quantity) => {
    setHWSetQuantities((prevQuantities) => ({
      ...prevQuantities,
      [hwSetName]: prevQuantities[hwSetName] + quantity,
    }));
  };

  return (
    <div style={projectContainerStyle}>
      <div style={horizontalAlign}>
        <div>
          <h2 style={headingStyle}>{name}</h2>
        </div>
        <div style={headingStyle}>
          <h2 style={userHeadingStyle}>Users</h2>
        </div>
        <div style={horizontalAlign}>
          <div>
            <HWSet
              name="HW Set 1"
              quantity={hwSetQuantities.HWSet1}
              capacity={100}
              onCheckIn={handleHWSetCheckIn}
              onCheckOut={handleHWSetCheckOut}
            />
          </div>
          <div>
            <HWSet
              name="HW Set 2"
              quantity={hwSetQuantities.HWSet2}
              capacity={100}
              onCheckIn={handleHWSetCheckIn}
              onCheckOut={handleHWSetCheckOut}
            />
          </div>
        </div>
        <TextField variant="outlined" label="Quantity" />
        <Button
          variant="contained"
          style={{
            backgroundColor: buttonColor,
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
          onClick={toggleButtonColor}
        >
          JOIN
        </Button>
      </div>
    </div>
  );
};

export default Project;
