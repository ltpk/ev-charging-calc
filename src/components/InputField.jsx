import PropTypes from 'prop-types';

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

export default InputField