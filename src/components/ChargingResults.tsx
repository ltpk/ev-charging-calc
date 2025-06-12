import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

export interface ChargingResultsProps {
  metrics: {
    chargingPower: number;
    chargingSpeed: number;
    energyNeeded: number;
    formattedTime: string;
  };
}

const ChargingResults: React.FC<ChargingResultsProps> = ({ metrics }) => {
  const {
    chargingPower,
    chargingSpeed,
    energyNeeded,
    formattedTime
  } = metrics;

  return (
    <Box sx={{ mt: 3, mb: 2, p: 2, border: '1px solid #eee', borderRadius: 2, background: '#fafafa' }}>
      <Typography variant="subtitle1">Total energy needed: <strong>{energyNeeded.toFixed(1)} kWh</strong></Typography>
      <Typography variant="subtitle1">Charging power: <strong>{chargingPower.toFixed(1)} kW</strong></Typography>
      <Typography variant="subtitle1">Charging speed: <strong>{chargingSpeed.toFixed(1)}% per hour</strong></Typography>
      <Typography variant="subtitle1">Time needed: <strong>{formattedTime}</strong></Typography>
    </Box>
  );
};

export default ChargingResults;
