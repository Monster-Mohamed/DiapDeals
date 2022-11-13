import { Grid, TextField, TextFieldProps } from '@mui/material';
import { useField } from 'formik';
import { FC } from 'react';
type AloneInput = {
  alone?: any;
};

export type InputType = AloneInput & TextFieldProps & { name: string };

const MainInput: FC<InputType> = ({ alone, name, ...props }) => {
  const [field, meta] = useField(name);

  const inputConfig = {
    ...field,
    ...props,
    fullWidth: true,
  };

  if (meta && meta.touched && meta.error) {
    inputConfig.error = true;
    inputConfig.helperText = meta.error;
  }

  return (
    <Grid item xs={12} sm={alone ? 6 : 12}>
      <TextField {...inputConfig} />
    </Grid>
  );
};

export default MainInput;
