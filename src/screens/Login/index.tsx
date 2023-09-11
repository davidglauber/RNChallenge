import React from 'react';
import Form from '../../components/Form';
import {
  LoginFooterText,
  LoginFooterButton,
  LoginFooterTextUnderlined,
} from './style';

function FooterLogin() {
  return (
    <LoginFooterButton>
      <LoginFooterText>Don’t have an account? </LoginFooterText>
      <LoginFooterTextUnderlined>Sign up</LoginFooterTextUnderlined>
      <LoginFooterText> here</LoginFooterText>
    </LoginFooterButton>
  );
}

export default function Login() {
  return (
    <Form
      title="Login"
      buttonTitle="Login"
      footer={<FooterLogin />}
      inputs={[
        {
          label: 'Email',
          placeholder: 'Type your email',
          type: 'email-address',
        },
        {
          label: 'Password',
          placeholder: 'Minimum 8 characters',
          type: 'default',
          isPassword: true,
        },
      ]}
    />
  );
}
