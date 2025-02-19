import { useState } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const InputField = ({ label, value, onChange, min, max }) => {
  const handleChange = (e) => {
    const newValue = parseFloat(e.target.value) || 0
    onChange(newValue)
  }

  return (
    <div className="input-group">
      <label className="label">{label}: <strong>{value}</strong></label>
      <input
        type='range'
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        className="input"
      />
    </div>
  )
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
}

const SelectField = ({ label, value, onChange, options }) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <div className="input-group">
      <label className="label">{label}:</label>
      <select value={value} onChange={handleChange} className="input">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
}

const EVChargingCalculator = () => {
  const [phases, setPhases] = useState(3)
  const [batteryCapacity, setBatteryCapacity] = useState(77)
  const [amperage, setAmperage] = useState(16)
  const [voltage, setVoltage] = useState(230)
  const [initialCharge, setInitialCharge] = useState(20)
  const [targetCharge, setTargetCharge] = useState(80)

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
            min={220}
            max={240}
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
