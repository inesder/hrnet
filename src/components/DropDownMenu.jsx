import React, { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DropDownMenu = ({ label, data, onChange }) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = useCallback((event) => {
        const value = event.target.value;
        setSelectedValue(value);
        if (onChange) {
            onChange(value);
        }
    }, [onChange]);

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="dropdown-label">{label}</InputLabel>
                <Select
                    labelId="dropdown-label"
                    id="dropdown"
                    value={selectedValue}
                    label={label}
                    onChange={handleChange}
                >
                    {data.map((item) => (
                        <MenuItem value={item.name} key={item.abbreviation}>
                            {item.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default React.memo(DropDownMenu);
