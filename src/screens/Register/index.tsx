import React, {useState} from 'react';
import Form from '../../components/Form';
import {useNavigation} from '@react-navigation/native';
import {
  RegisterFooterButton,
  RegisterFooterText,
  RegisterFooterTextUnderlinedBold,
} from './style';
import {Container} from '../Login/style';
import {Snackbar} from 'react-native-paper';

function FooterRegister() {
  const {navigate}: any = useNavigation();

  return (
    <RegisterFooterButton onPress={() => navigate('Login')}>
      <RegisterFooterText>Already have an account? </RegisterFooterText>
      <RegisterFooterTextUnderlinedBold>
        Log in here
      </RegisterFooterTextUnderlinedBold>
    </RegisterFooterButton>
  );
}

export default function Register() {
  const {navigate}: any = useNavigation();
  const [visible, setVisible] = useState(false);

  function handleResult(result: object) {
    if (result) {
      setVisible(true);

      setTimeout(() => {
        navigate('Login');
      }, 1000);
    }
  }
  return (
    <Container>
      <Form
        title="Create your account"
        buttonTitle="Create account"
        onSubmit={result => handleResult(result)}
        inputs={[
          {
            label: 'First Name',
            placeholder: 'Type your Name',
            type: 'email-address',
          },
          {
            label: 'Last Name',
            placeholder: 'Type your Last Name',
            type: 'email-address',
          },
          {
            label: 'Email',
            placeholder: 'Type your Email',
            type: 'email-address',
          },
          {
            label: 'Password',
            placeholder: 'Minimum 8 characters',
            type: 'default',
            isPassword: true,
          },
        ]}
        privacyPolicyEnabled
        footer={<FooterRegister />}
      />

      <Snackbar visible={visible} onDismiss={() => setVisible(false)}>
        You've been registered successfully.
      </Snackbar>
    </Container>
  );
}
