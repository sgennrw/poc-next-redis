import { useContext, useState } from 'react';
import {
  FormContext,
  FormContextProvider,
  IFormData,
  IStep1Data,
  IStep2Data,
} from './context';
import Step1 from './Step1';
import Step2 from './Step2';

const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const { formData, setFormData } = useContext(FormContext);

  const onSubmit =
    (step: keyof IFormData) => (values: IStep1Data | IStep2Data) => {
      setFormData({
        ...formData,
        [step]: values,
      });
      setCurrentStep(currentStep + 1);
    };

  if (currentStep === 3) {
    console.log('----', formData);
  }

  return (
    <div>
      <div>
        {currentStep > 1 && (
          <button onClick={() => setCurrentStep(currentStep - 1)}>Back</button>
        )}
        step: {currentStep}
      </div>

      {currentStep === 1 && (
        <Step1 onSubmit={(values) => onSubmit('step1')(values)} />
      )}
      {currentStep === 2 && (
        <Step2 onSubmit={(values) => onSubmit('step2')(values)} />
      )}
    </div>
  );
};

const StepForm = () => (
  <FormContextProvider>
    <StepperForm />
  </FormContextProvider>
);

export default StepForm;
