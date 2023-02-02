import Form from '@/components/Form/Form';
import Input from '@/components/Form/Input';
import { FC, useContext } from 'react';
import { FormContext, IStep1Data } from './context';

const Step1: FC<{ onSubmit: (_values: IStep1Data) => void }> = ({
  onSubmit,
}) => {
  const { formData } = useContext(FormContext);

  return (
    <Form onSubmit={onSubmit} defaultValues={formData['step1']}>
      <Input name="email" />
      <Input name="password" />

      <button type="submit">Next</button>
    </Form>
  );
};

export default Step1;
