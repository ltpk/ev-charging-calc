import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'
import MuiInput from '@mui/material/Input'

export interface InputFieldProps {
  label: string
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, min, max, step = 1 }) => {
  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    onChange(typeof newValue === 'number' ? newValue : newValue[0])
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = Number(e.target.value)
    if (!isNaN(parsed)) {
      const clamped = min !== undefined && max !== undefined
        ? Math.max(min, Math.min(max, parsed))
        : parsed
      onChange(clamped)
    }
  }

  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
        <Typography>{label}</Typography>
        <MuiInput
          value={value}
          onChange={handleInputChange}
          inputProps={{ min, max, step, type: 'number' }}
          sx={{ width: 72, ml: 2 }}
          size="small"
        />
      </Box>
      <Slider
        value={value}
        onChange={handleSliderChange}
        min={min}
        max={max}
        step={step}
        valueLabelDisplay="auto"
      />
    </Box>
  )
}

export default InputField
