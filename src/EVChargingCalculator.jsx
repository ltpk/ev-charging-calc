import { useState, useEffect } from 'react'
import './styles.css'
import InputField from './components/InputField'
import SelectField from './components/SelectField'
import CheckboxField from './components/CheckboxField'

const EVChargingCalculator = () => {
  const [phases, setPhases] = useState(3)
  const [batteryCapacity, setBatteryCapacity] = useState(77)
  const [amperage, setAmperage] = useState(16)
  const [voltage, setVoltage] = useState(230)
  const [initialCharge, setInitialCharge] = useState(20)
  const [targetCharge, setTargetCharge] = useState(80)
  const [rememberValues, setRememberValues] = useState(false)

  // Load saved values from localStorage on component mount
  useState(() => {
    if (localStorage.getItem('evCalculatorValues')) {
      const savedValues = JSON.parse(localStorage.getItem('evCalculatorValues'))
      setPhases(savedValues.phases)
      setBatteryCapacity(savedValues.batteryCapacity)
      setAmperage(savedValues.amperage)
      setVoltage(savedValues.voltage)
      setInitialCharge(savedValues.initialCharge)
      setTargetCharge(savedValues.targetCharge)
      setRememberValues(true)
    }
  }, [])

  // Save values to localStorage when rememberValues is true
  useEffect(() => {
    if (rememberValues) {
      localStorage.setItem('evCalculatorValues', JSON.stringify({
        phases,
        batteryCapacity,
        amperage,
        voltage,
        initialCharge,
        targetCharge
      }))
    } else {
      localStorage.removeItem('evCalculatorValues')
    }
  }, [rememberValues, phases, batteryCapacity, amperage, voltage, initialCharge, targetCharge])

  const chargingPower = (phases * amperage * voltage) / 1000
  const chargingSpeed = (chargingPower / batteryCapacity) * 100
  const chargeNeeded = targetCharge - initialCharge
  const hoursNeeded = chargeNeeded / chargingSpeed

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">EV Charging Calculator</h2>

        <InputField
          label='Battery capacity (kWh)'
          value={batteryCapacity}
          onChange={setBatteryCapacity}
          min={0}
        />

        <SelectField
          label='Phases'
          value={phases}
          onChange={setPhases}
          options={[1, 3]}
        />

        <div className="two-columns">
          <InputField
            label='Charge current (A)'
            value={amperage}
            onChange={setAmperage}
            min={0}
            max={16}
          />
          <InputField
            label='Grid voltage (V)'
            value={voltage}
            onChange={setVoltage}
            min={207}
            max={244}
          />
        </div>

        <div className="two-columns">
          <InputField
            label='Initial charge (%)'
            value={initialCharge}
            onChange={setInitialCharge}
            min={0}
            max={100}
          />
          <InputField
            label='Target charge (%)'
            value={targetCharge}
            onChange={setTargetCharge}
            min={0}
            max={100}
          />
        </div>

        <CheckboxField
          label='Remember values on this browser'
          checked={rememberValues}
          onChange={setRememberValues}
        />

        <div className="results">
          <div className="result-row">
            <span className="result-label">Total energy needed:</span>
            <span className="result-value">
              {((chargeNeeded / 100) * batteryCapacity).toFixed(1)} kWh
            </span>
          </div>
          <div className="result-row">
            <span className="result-label">Charging power:</span>
            <span className="result-value">{chargingPower.toFixed(1)} kW</span>
          </div>
          <div className="result-row">
            <span className="result-label">Charging speed:</span>
            <span className="result-value">{chargingSpeed.toFixed(1)}% per hour</span>
          </div>
          <div className="result-row">
            <span className="result-label">Time needed:</span>
            <span className="result-value">
              {Math.floor(hoursNeeded)} hours {Math.round((hoursNeeded % 1) * 60)} minutes (
              {hoursNeeded.toFixed(1)} hours)
            </span>
          </div>
        </div>
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
