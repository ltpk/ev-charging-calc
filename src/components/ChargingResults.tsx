import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import React from 'react'
import { ChargingMetrics } from '../utils/chargingCalculations'

export interface ChargingResultsProps {
  metrics: ChargingMetrics
  showGridMetrics: boolean
}

const ChargingResults: React.FC<ChargingResultsProps> = ({ metrics, showGridMetrics }) => {
  const {
    chargingPower,
    gridPower,
    chargingSpeed,
    energyNeeded,
    gridEnergyNeeded,
    chargeNeeded,
    formattedTime
  } = metrics

  if (chargeNeeded === 0) {
    return (
      <Alert severity="warning" sx={{ mt: 3, mb: 2 }}>
        Target charge must be higher than initial charge.
      </Alert>
    )
  }

  return (
    <Box sx={{ mt: 3, mb: 2, p: 2, border: '1px solid #eee', borderRadius: 2, background: '#fafafa' }}>
      <Typography variant="subtitle1">
        Energy stored in battery: <strong>{energyNeeded.toFixed(1)} kWh</strong>
      </Typography>
      {showGridMetrics && (
        <Typography variant="subtitle1">
          Energy drawn from grid: <strong>{gridEnergyNeeded.toFixed(1)} kWh</strong>
        </Typography>
      )}
      <Typography variant="subtitle1">
        Charger output: <strong>{chargingPower.toFixed(1)} kW</strong>
      </Typography>
      {showGridMetrics && (
        <Typography variant="subtitle1">
          Grid draw: <strong>{gridPower.toFixed(1)} kW</strong>
        </Typography>
      )}
      <Typography variant="subtitle1">Charging speed: <strong>{chargingSpeed.toFixed(1)}% per hour</strong></Typography>
      <Typography variant="subtitle1">Time needed: <strong>{formattedTime}</strong></Typography>
    </Box>
  )
}

export default ChargingResults
