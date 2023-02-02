import { FC } from 'react';

interface InputProps {
  name: string;
  [rest: string]: any;
}

const Input: FC<InputProps> = ({ register, name, ...rest }) => {
  return (
    <>
      {name}
      <input {...register(name)} {...rest} />
    </>
  );
};

export default Input;
