import { useState } from 'react'
import './styles.css'
import InputField from './components/InputField'
import SelectField from './components/SelectField'
import CheckboxField from './components/CheckboxField'
import { calculateChargingMetrics } from './utils/chargingCalculations'
import { useLocalStorage } from './hooks/useLocalStorage'
import ChargingResults from './components/ChargingResults'

const EVChargingCalculator = () => {
  // Initialize rememberValues based on whether localStorage has the key
  const [rememberValues, setRememberValues] = useState(() => {
    return localStorage.getItem('evCalculatorValues') !== null
  })

  const [formValues, setFormValues] = useLocalStorage('evCalculatorValues', {
    phases: 3,
    batteryCapacity: 77,
    amperage: 16,
    voltage: 230,
    initialCharge: 20,
    targetCharge: 80
  }, rememberValues)

  const {
    phases,
    batteryCapacity,
    amperage,
    voltage,
    initialCharge,
    targetCharge
  } = formValues

  const handleValueChange = (key, value) => {
    setFormValues({
      ...formValues,
      [key]: Number(value)
    })
  }

  const toggleRememberValues = (value) => {
    setRememberValues(value)
    if (!value) {
      localStorage.removeItem('evCalculatorValues')
    }
  }

  const chargingMetrics = calculateChargingMetrics({
    phases,
    batteryCapacity,
    amperage,
    voltage,
    initialCharge,
    targetCharge
  })

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">EV Charging Calculator</h2>

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

        <div className="two-columns">
          <InputField
            label='Charge current (A)'
            value={amperage}
            onChange={(value) => handleValueChange('amperage', value)}
            min={0}
            max={32}
          />
          <InputField
            label='Grid voltage (V)'
            value={voltage}
            onChange={(value) => handleValueChange('voltage', value)}
            min={207}
            max={244}
          />
        </div>

        <div className="two-columns">
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
        </div>

        <CheckboxField
          label='Remember values on this browser'
          checked={rememberValues}
          onChange={toggleRememberValues}
        />

        <ChargingResults metrics={chargingMetrics} />

        <div className="github-link">
          <a
            href='https://github.com/ltpk/ev-charging-calc'
            target='_blank'
            rel='noopener noreferrer'
            className="link"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default EVChargingCalculator
