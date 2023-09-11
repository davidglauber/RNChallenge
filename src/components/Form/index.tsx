import FeatherIcons from '@expo/vector-icons/Feather';
import React, {ReactNode, useState} from 'react';
import {FlatList, KeyboardTypeOptions} from 'react-native';
import {
  FormButton,
  FormContainerView,
  FormInput,
  FormInputView,
  FormLabel,
  FormPasswordButton,
  FormTitle,
  FormTitleButton,
} from './style';

interface InputsInterface {
  label: string;
  placeholder: string;
  type: KeyboardTypeOptions;
  isPassword?: boolean;
}

interface FormInterface {
  title: string;
  buttonTitle: string;
  inputs: InputsInterface[];
  footer?: ReactNode;
}
export default function Form({
  title,
  buttonTitle,
  inputs,
  footer,
}: FormInterface): ReactNode {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormContainerView>
      <FormTitle>{title}</FormTitle>

      <FlatList
        renderItem={({item}) => {
          return (
            <FormInputView>
              <FormLabel>{item.label}</FormLabel>
              <FormInput
                placeholder={item.placeholder}
                keyboardType={item.type}
                secureTextEntry={showPassword}
                autoCapitalize="none"
                placeholderTextColor="#CFCFCF"
              />

              {item.isPassword && (
                <FormPasswordButton
                  onPress={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <FeatherIcons name="eye" size={20} color="#A0A0A0" />
                  ) : (
                    <FeatherIcons name="eye-off" size={20} color="#A0A0A0" />
                  )}
                </FormPasswordButton>
              )}
            </FormInputView>
          );
        }}
        data={inputs}
      />

      <FormButton>
        <FormTitleButton>{buttonTitle}</FormTitleButton>
      </FormButton>

      {/* You can put whatever footer you want to through props */}
      {footer}
    </FormContainerView>
  );
}
