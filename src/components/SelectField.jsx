import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const SelectField = ({ label, value, onChange, options }) => {
  const handleChange = (e) => {
    onChange(Number(e.target.value))
  }

  return (
    <Box sx={{ mb: 2 }}>
      <Typography gutterBottom>{label}:</Typography>
      <Select value={value} onChange={handleChange} sx={{ minWidth: 120 }}>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </Box>
  )
}

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
}

export default SelectField