import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
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

  if (chargeNeeded === 0) return null

  return (
    <Box sx={{ mt: 3, mb: 2, p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2, bgcolor: 'grey.50' }}>
      <Box sx={{ textAlign: 'center', pb: 2, mb: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Typography variant="overline" color="text.secondary" display="block">
          Time needed
        </Typography>
        <Typography variant="h3" color="primary" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
          {formattedTime}
        </Typography>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr auto', rowGap: 1, columnGap: 2 }}>
        <Typography variant="body2" color="text.secondary">Charging speed</Typography>
        <Typography variant="body2" sx={{ fontWeight: 600, textAlign: 'right' }}>{chargingSpeed.toFixed(1)}% / hr</Typography>

        <Typography variant="body2" color="text.secondary">Charger output</Typography>
        <Typography variant="body2" sx={{ fontWeight: 600, textAlign: 'right' }}>{chargingPower.toFixed(1)} kW</Typography>

        {showGridMetrics && (
          <>
            <Typography variant="body2" color="text.secondary">Grid draw</Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, textAlign: 'right' }}>{gridPower.toFixed(1)} kW</Typography>
          </>
        )}

        <Typography variant="body2" color="text.secondary">Energy to battery</Typography>
        <Typography variant="body2" sx={{ fontWeight: 600, textAlign: 'right' }}>{energyNeeded.toFixed(1)} kWh</Typography>

        {showGridMetrics && (
          <>
            <Typography variant="body2" color="text.secondary">Energy from grid</Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, textAlign: 'right' }}>{gridEnergyNeeded.toFixed(1)} kWh</Typography>
          </>
        )}
      </Box>
    </Box>
  )
}

export default ChargingResults
