import { Grid, TextField } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { InputType } from './MainInput';

let maxBirthdayDate = new Date();
maxBirthdayDate.setFullYear(maxBirthdayDate.getFullYear() - 13);

type DateInp = InputType & {
  setValue: Dispatch<SetStateAction<Date | null>>;
  value: Date | null;
};

const DateInput: React.FC<DateInp> = ({ setValue, value, ...props }) => {
  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <Grid item xs={12}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          inputFormat="MM/DD/YYYY"
          value={value}
          maxDate={maxBirthdayDate}
          onChange={handleChange}
          renderInput={(params: any) => <TextField {...props} {...params} />}
        />
      </LocalizationProvider>
    </Grid>
  );
};

export default DateInput;
