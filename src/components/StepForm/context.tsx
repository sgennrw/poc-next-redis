import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
export interface IStep1Data {
  email?: string;
  password?: string;
}

export interface IStep2Data {
  firstName?: string;
  lastName?: string;
}

export interface IFormData {
  id?: string;
  step1: IStep1Data;
  step2: IStep2Data;
}

export const initialFormData = {
  id: undefined,
  step1: {
    email: undefined,
    password: undefined,
  },
  step2: {
    firstName: undefined,
    lastName: undefined,
  },
};

export const FormContext = createContext<{
  formData: IFormData;
  setFormData: Dispatch<SetStateAction<IFormData>>;
}>({
  formData: initialFormData,
  setFormData: () => undefined,
});

export const FormContextProvider: FC<{
  children: ReactNode;
  defaultValues: IFormData;
}> = ({ children, defaultValues }) => {
  const [formData, setFormData] = useState<IFormData>({
    ...initialFormData,
    ...defaultValues,
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
