import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Form from '../../components/Form';
import {
  Container,
  LoginFooterButton,
  LoginFooterText,
  LoginFooterTextUnderlined,
} from './style';

function FooterLogin() {
  const {navigate}: any = useNavigation();

  return (
    <LoginFooterButton onPress={() => navigate('Register')}>
      <LoginFooterText>Don’t have an account? </LoginFooterText>
      <LoginFooterTextUnderlined>Sign up</LoginFooterTextUnderlined>
      <LoginFooterText> here</LoginFooterText>
    </LoginFooterButton>
  );
}

export default function Login() {
  return (
    <Container>
      <Form
        title="Login"
        buttonTitle="Login"
        onSubmit={result => console.log('result: ' + JSON.stringify(result))}
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
        footer={<FooterLogin />}
      />
    </Container>
  );
}
