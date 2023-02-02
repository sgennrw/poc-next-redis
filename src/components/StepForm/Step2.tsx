import Form from '@/components/Form/Form';
import Input from '@/components/Form/Input';
import { FC, useContext } from 'react';
import { FormContext, IStep2Data } from './context';

const Step2: FC<{ onSubmit: (_values: IStep2Data) => void }> = ({
  onSubmit,
}) => {
  const { formData } = useContext(FormContext);

  return (
    <Form onSubmit={onSubmit} defaultValues={formData['step2']}>
      <Input name="firstName" />
      <Input name="lastName" />

      <button type="submit">Submit</button>
    </Form>
  );
};

export default Step2;
