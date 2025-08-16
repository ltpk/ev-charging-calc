import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'

export interface InputFieldProps {
  label: string
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, min, max, step = 1 }) => {
  const handleChange = (_: Event, newValue: number | number[]) => {
    onChange(typeof newValue === 'number' ? newValue : newValue[0])
  }

  return (
    <Box sx={{ mb: 2 }}>
      <Typography gutterBottom>{label}: <strong>{value}</strong></Typography>
      <Slider
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        valueLabelDisplay="auto"
      />
    </Box>
  )
}

export default InputField
