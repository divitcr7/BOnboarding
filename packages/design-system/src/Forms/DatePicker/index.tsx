import * as React from 'react';
import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface DatePickerProps extends MuiDatePickerProps<AdapterDayjs> {
  fullWidth?: boolean;
}

export function DatePicker({ fullWidth, ...props }: DatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        slotProps={{
          openPickerButton: { color: 'primary', disableRipple: true },
          textField: { fullWidth },
        }}
        {...props}
      />
    </LocalizationProvider>
  );
}
