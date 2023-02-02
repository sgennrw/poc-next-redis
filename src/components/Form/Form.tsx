import React, { ReactNode } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IForm {
  defaultValues: any;
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}

const Form: React.FC<IForm> = ({ defaultValues, children, onSubmit }) => {
  const { handleSubmit, register } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
};

export default Form;
