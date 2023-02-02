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
  step1: IStep1Data;
  step2: IStep2Data;
}

const initialFormData = {
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

export const FormContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<IFormData>(initialFormData);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
