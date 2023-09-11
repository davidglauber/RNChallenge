import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {width} from '../../utils/Dimensions';

const formWidth = RFValue(300);

export const FormContainerView = styled.View`
  margin: ${RFValue(20)}px;
  justify-content: center;
  align-items: center;
`;
export const FormTitle = styled.Text`
  color: #000000;
  font-family: Sora-Bold;
  font-weight: 600;
  font-size: ${RFValue(18)}px;
`;
export const FormInputView = styled.View`
  margin-vertical: ${RFValue(15)}px;
`;

export const FormLabel = styled.Text`
  font-size: ${RFValue(11)}px;
  font-family: Sintony-Regular;
  margin-bottom: ${RFValue(5)}px;
  color: #a0a0a0;
`;

export const FormInput = styled.TextInput`
  font-family: Sora-Regular;
  background-color: #f4f4f4;
  border-radius: ${RFValue(4)}px;
  font-size: ${RFValue(14)}px;
  width: ${formWidth}px;
  color: #000000;
  padding-horizontal: ${RFValue(10)}px;
  padding-vertical: ${RFValue(15)}px;
`;

export const FormButton = styled.TouchableOpacity`
  width: ${width}px;
  align-items: center;
  justify-content: center;
  background-color: #770fdf;
  width: ${formWidth}px;
  height: ${RFValue(54)}px;
  border-radius: ${RFValue(4)}px;
  margin-top: ${RFValue(35)}px;
`;

export const FormPasswordButton = styled.TouchableOpacity`
  position: absolute;
  right: ${RFValue(20)}px;
  top: ${RFValue(37)}px;
`;

export const FormTitleButton = styled.Text`
  font-family: Sitara-Regular;
  color: #ffffff;
  font-size: ${RFValue(16)}px;
`;
