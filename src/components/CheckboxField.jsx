import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckboxField = ({ label, checked, onChange }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={(e) => onChange(e.target.checked)} />}
        label={label}
      />
    </Box>
  )
}

CheckboxField.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CheckboxField