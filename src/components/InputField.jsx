import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const InputField = ({ label, value, onChange, min, max }) => {
  const handleChange = (e, newValue) => {
    onChange(newValue)
  }

  return (
    <Box sx={{ mb: 2 }}>
      <Typography gutterBottom>{label}: <strong>{value}</strong></Typography>
      <Slider
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={1}
        valueLabelDisplay="auto"
      />
    </Box>
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