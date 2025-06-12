import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export interface SelectFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  options: number[];
}

const SelectField: React.FC<SelectFieldProps> = ({ label, value, onChange, options }) => {
  const handleChange = (e: React.ChangeEvent<{ value: unknown }> | React.ChangeEvent<HTMLInputElement> | any) => {
    onChange(Number(e.target.value));
  };

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
  );
};

export default SelectField;
