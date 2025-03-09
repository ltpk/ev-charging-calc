import PropTypes from 'prop-types'

const ChargingResults = ({ metrics }) => {
  const {
    chargingPower,
    chargingSpeed,
    energyNeeded,
    formattedTime
  } = metrics

  return (
    <div className="results">
      <div className="result-row">
        <span className="result-label">Total energy needed:</span>
        <span className="result-value">
          {energyNeeded.toFixed(1)} kWh
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
        <span className="result-value">{formattedTime}</span>
      </div>
    </div>
  )
}

ChargingResults.propTypes = {
  metrics: PropTypes.shape({
    chargingPower: PropTypes.number.isRequired,
    chargingSpeed: PropTypes.number.isRequired,
    energyNeeded: PropTypes.number.isRequired,
    formattedTime: PropTypes.string.isRequired
  }).isRequired
}

export default ChargingResults