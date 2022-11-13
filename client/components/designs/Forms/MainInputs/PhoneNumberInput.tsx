import { FC, useState } from 'react';
import { MuiTelInput } from 'mui-tel-input';
import { Grid } from '@mui/material';

type Phone = {
  setPhoneInput: any;
  phoneInput: string;
};

const PhoneNumberInput: FC<Phone> = ({ setPhoneInput, phoneInput }) => {
  const [info, setInfo] = useState(null);

  const handleChange = (newValue: any, info: any) => {
    setInfo(info);
    setPhoneInput(newValue);
  };

  return (
    <Grid item xs={12}>
      <MuiTelInput
        fullWidth
        defaultCountry="US"
        value={phoneInput}
        onChange={handleChange}
      />
    </Grid>
  );
};

export default PhoneNumberInput;
