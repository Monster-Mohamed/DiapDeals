import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface MainFormType {
  children: ReactNode;
  initialValues: any;
  validation: any;
  onSubmit: (values: any, formikHelper: any) => void;
  loading: boolean;
  errors: string;
  btnText: string;
  setErrors: Dispatch<SetStateAction<string>>;
  secondPageInputs?: JSX.Element;
  goBack?: boolean;
}
