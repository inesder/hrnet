import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Calendar = ({ value, onChange }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                value={value || null}
                onChange={(newValue) => onChange(newValue?.format('YYYY-MM-DD'))}
                renderInput={(params) => <input {...params} className="calendar-input" />}
            />
        </LocalizationProvider>
    );
};

export default React.memo(Calendar);
