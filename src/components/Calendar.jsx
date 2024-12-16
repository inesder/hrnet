import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function Calendar({ value, onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
      value={value|| null}
      onChange={(newValue) => onChange(newValue?.format('YYYY-MM-DD'))}
      />
    </LocalizationProvider>
  );
}

export default Calendar
