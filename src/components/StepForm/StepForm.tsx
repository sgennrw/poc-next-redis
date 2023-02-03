import { useContext, useState } from 'react';
import { FormContext, IFormData, IStep1Data, IStep2Data } from './context';
import Step1 from './Step1';
import Step2 from './Step2';

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const { formData, setFormData } = useContext(FormContext);

  const onSubmit =
    (step: keyof IFormData) => (values: IStep1Data | IStep2Data) => {
      const data = { ...formData, [step]: values };

      setFormData(data);

      const body = {
        formToken: formData.id,
        data,
      };

      fetch('/api/form/set', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((data) => console.log('save success', data))
        .catch(() => console.error('error ja'));

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

export default StepForm;
