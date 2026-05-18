import { useState } from 'react'
import InputField from './components/InputField'
import CheckboxField from './components/CheckboxField'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { calculateChargingMetrics, ChargingMetricsParams } from './utils/chargingCalculations'
import { useLocalStorage } from './hooks/useLocalStorage'
import ChargingResults from './components/ChargingResults'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// Max amperage per phase — 32A is valid for both single and three phase
const MAX_AMPERAGE = 32

type FormValues = ChargingMetricsParams

const EVChargingCalculator: React.FC = () => {
  const [rememberValues, setRememberValues] = useState(() => {
    return localStorage.getItem('evCalculatorValues') !== null
  })

  const [formValues, setFormValues] = useLocalStorage<FormValues>('evCalculatorValues', {
    phases: 3,
    batteryCapacity: 77,
    amperage: 16,
    voltage: 230,
    initialCharge: 20,
    targetCharge: 80,
    chargingLoss: 0
  }, rememberValues)

  const {
    phases,
    batteryCapacity,
    amperage,
    voltage,
    initialCharge,
    targetCharge,
    chargingLoss
  } = formValues

  const handleValueChange = (key: keyof FormValues, value: number) => {
    setFormValues({ ...formValues, [key]: value })
  }

  const toggleRememberValues = (value: boolean) => {
    setRememberValues(value)
    if (!value) {
      localStorage.removeItem('evCalculatorValues')
    }
  }

  const chargingMetrics = calculateChargingMetrics(formValues)
  const showGridMetrics = (chargingLoss ?? 0) > 0

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Card sx={{ maxWidth: 500, mx: 'auto', p: 2 }}>
        <CardContent>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            EV Charging Calculator
          </Typography>

          <InputField
            label="Battery capacity (kWh)"
            value={batteryCapacity}
            onChange={(value) => handleValueChange('batteryCapacity', value)}
            min={1}
            max={200}
          />

          <Box sx={{ mb: 2 }}>
            <Typography gutterBottom>Phases</Typography>
            <ToggleButtonGroup
              value={phases}
              exclusive
              onChange={(_, value: number | null) => { if (value !== null) handleValueChange('phases', value) }}
              size="small"
              color="primary"
            >
              <ToggleButton value={1}>1-phase</ToggleButton>
              <ToggleButton value={3}>3-phase</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 2 }}>
            <InputField
              label="Charge current (A)"
              value={amperage}
              onChange={(value) => handleValueChange('amperage', value)}
              min={0}
              max={MAX_AMPERAGE}
            />
            <InputField
              label="Grid voltage (V)"
              value={voltage}
              onChange={(value) => handleValueChange('voltage', value)}
              min={100}
              max={400}
            />
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 2 }}>
            <InputField
              label="Initial charge (%)"
              value={initialCharge}
              onChange={(value) => handleValueChange('initialCharge', value)}
              min={0}
              max={100}
            />
            <InputField
              label="Target charge (%)"
              value={targetCharge}
              onChange={(value) => handleValueChange('targetCharge', value)}
              min={0}
              max={100}
              step={10}
            />
          </Box>

          <InputField
            label="Charging loss (%)"
            value={chargingLoss ?? 0}
            onChange={(value) => handleValueChange('chargingLoss', value)}
            min={0}
            max={25}
          />

          <CheckboxField
            label="Remember values on this browser"
            checked={rememberValues}
            onChange={toggleRememberValues}
          />

          <ChargingResults metrics={chargingMetrics} showGridMetrics={showGridMetrics} />

          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Link
              href="https://github.com/ltpk/ev-charging-calc"
              target="_blank"
              rel="noopener noreferrer"
              color="text.disabled"
              variant="caption"
              underline="hover"
            >
              View on GitHub
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default EVChargingCalculator
