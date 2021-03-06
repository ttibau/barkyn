import React, { InputHTMLAttributes } from 'react';

import { Input, Label, InputContainer, ErorrHandler } from './styles';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;
interface IInputProps {
  placeholder?: string;
  label?: string;
  type?: string;
  error?: string;
  wrapped?:boolean;
}

export const InputComponent = React.forwardRef<NativeInputProps, IInputProps>(
  (props, ref) => (
    <InputContainer wrapped={props.wrapped}>
      <Label>{props.label}</Label>
      <Input placeholder={props.placeholder} ref={ref as any} {...props} />
      <ErorrHandler>
        {props.error}
      </ErorrHandler>
    </InputContainer>
  ),
);