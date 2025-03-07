import PropTypes from 'prop-types';

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

export default SelectField