import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import React, { Dispatch, ReactNode } from 'react';

type Radio = {
  value: string;
  defaultValue: string;
  setValue: Dispatch<React.SetStateAction<string>>;
  children: ReactNode;
};

const RadioMainInput: React.FC<Radio> = ({
  value,
  setValue,
  defaultValue,
  children,
}) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={defaultValue}
        value={value}
        onChange={(inp) => setValue(inp.target.value)}
        name="radio-buttons-group"
        sx={{}}
      >
        {children}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioMainInput;
