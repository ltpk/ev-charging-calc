import { useState } from 'react'
import InputField from './components/InputField'
import SelectField from './components/SelectField'
import CheckboxField from './components/CheckboxField'
import { calculateChargingMetrics, ChargingMetricsParams, ChargingMetrics } from './utils/chargingCalculations'
import { useLocalStorage } from './hooks/useLocalStorage'
import ChargingResults from './components/ChargingResults'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

interface FormValues extends ChargingMetricsParams {
  phases: number
  batteryCapacity: number
  amperage: number
  voltage: number
  initialCharge: number
  targetCharge: number
  chargingLoss: number
}

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
    setFormValues({
      ...formValues,
      [key]: Number(value)
    })
  }

  const toggleRememberValues = (value: boolean) => {
    setRememberValues(value)
    if (!value) {
      localStorage.removeItem('evCalculatorValues')
    }
  }

  const chargingMetrics: ChargingMetrics = calculateChargingMetrics({
    phases,
    batteryCapacity,
    amperage,
    voltage,
    initialCharge,
    targetCharge,
    chargingLoss
  })

  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 4 }}>
      <Card sx={{ maxWidth: 500, mx: 'auto', p: 2 }}>
        <CardContent>
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            EV Charging Calculator
          </Typography>

          <InputField
            label='Battery capacity (kWh)'
            value={batteryCapacity}
            onChange={(value) => handleValueChange('batteryCapacity', value)}
            min={0}
          />

          <SelectField
            label='Phases'
            value={phases}
            onChange={(value) => handleValueChange('phases', value)}
            options={[1, 3]}
          />

          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 2 }}>
            <InputField
              label='Charge current (A)'
              value={amperage}
              onChange={(value) => handleValueChange('amperage', value)}
              min={0}
              max={phases === 1 ? 32 : 16}
            />
            <InputField
              label='Grid voltage (V)'
              value={voltage}
              onChange={(value) => handleValueChange('voltage', value)}
              min={207}
              max={244}
            />
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 2 }}>
            <InputField
              label='Initial charge (%)'
              value={initialCharge}
              onChange={(value) => handleValueChange('initialCharge', value)}
              min={0}
              max={100}
            />
            <InputField
              label='Target charge (%)'
              value={targetCharge}
              onChange={(value) => handleValueChange('targetCharge', value)}
              min={0}
              max={100}
            />
          </Box>

          <InputField
            label='Charging loss (%)'
            value={chargingLoss}
            onChange={(value) => handleValueChange('chargingLoss', value)}
            min={0}
            max={25}
          />

          <CheckboxField
            label='Remember values on this browser'
            checked={rememberValues}
            onChange={toggleRememberValues}
          />

          <ChargingResults metrics={chargingMetrics} />

          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <a
              href='https://github.com/ltpk/ev-charging-calc'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: '#666', textDecoration: 'none', fontSize: 12 }}
              onMouseOver={e => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseOut={e => (e.currentTarget.style.textDecoration = 'none')}
            >
              View on GitHub
            </a>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default EVChargingCalculator
