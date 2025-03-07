import PropTypes from 'prop-types';

const CheckboxField = ({ label, checked, onChange }) => {
  return (
    <div className="input-group">
      <label className="label">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="checkbox"
        />
        {label}
      </label>
    </div>
  )
}

CheckboxField.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CheckboxField