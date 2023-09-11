import FeatherIcons from '@expo/vector-icons/Feather';
import React, {ReactNode, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {FlatList, KeyboardTypeOptions} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {
  FormButton,
  FormCheckboxButton,
  FormCheckboxText,
  FormCheckboxView,
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
  onSubmit: (event: any) => void;
  privacyPolicyEnabled?: boolean;
}
export default function Form({
  title,
  buttonTitle,
  inputs,
  footer,
  onSubmit,
  privacyPolicyEnabled,
}: FormInterface): ReactNode {
  const [showPassword, setShowPassword] = useState(true);
  const [checked, setChecked] = useState(false);
  const {register, control, handleSubmit} = useForm({
    mode: 'onSubmit',
  });

  const handleFormSubmit = (formData: any) => {
    onSubmit(formData);
  };

  return (
    <FormContainerView showsVerticalScrollIndicator={false}>
      <FormTitle>{title}</FormTitle>

      <FlatList
        renderItem={({item}) => {
          return (
            <FormInputView>
              <FormLabel>{item.label}</FormLabel>

              <Controller
                name={item.label}
                control={control}
                rules={{required: true}}
                render={({field}) => (
                  <FormInput
                    {...register(item.label)}
                    value={field.value}
                    onChangeText={field.onChange}
                    placeholder={item.placeholder}
                    keyboardType={item.type}
                    secureTextEntry={showPassword}
                    autoCapitalize="none"
                    placeholderTextColor="#CFCFCF"
                  />
                )}
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

      {privacyPolicyEnabled && (
        <FormCheckboxView>
          <FormCheckboxButton onPress={() => setChecked(!checked)}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <FormCheckboxText>
              I am over 18 years of age and I have read and agree to the Terms
              of Service and Privacy policy.
            </FormCheckboxText>
          </FormCheckboxButton>
        </FormCheckboxView>
      )}

      <FormButton
        disabled={privacyPolicyEnabled ? !checked : false}
        onPress={handleSubmit(handleFormSubmit)}>
        <FormTitleButton>{buttonTitle}</FormTitleButton>
      </FormButton>

      {/* You can put whatever footer you want to through props */}
      {footer}
    </FormContainerView>
  );
}
