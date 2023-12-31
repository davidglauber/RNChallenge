import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {width} from '../../utils/Dimensions';
import {theme} from '../../utils/theme';

const formWidth = RFValue(300);

export const FormContainerView = styled.ScrollView.attrs(({}) => ({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}))`
  margin: ${RFValue(20)}px;
`;
export const FormTitle = styled.Text`
  color: ${theme.colors.black};
  font-family: Sora-Bold;
  font-weight: 600;
  font-size: ${RFValue(18)}px;
`;

export const FormInputView = styled.View`
  margin-vertical: ${RFValue(15)}px;
`;

export const FormCheckboxView = styled.View`
  margin-horizontal: ${RFValue(25)}px;
`;

export const FormCheckboxButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FormCheckboxText = styled.Text`
  font-family: Sora-Regular;
  margin-vertical: ${RFValue(15)}px;
  font-size: ${RFValue(9)}px;
`;

export const FormLabel = styled.Text`
  font-size: ${RFValue(11)}px;
  font-family: Sintony-Regular;
  margin-bottom: ${RFValue(5)}px;
  color: ${theme.colors.starDust};
`;

export const FormInput = styled.TextInput`
  font-family: Sora-Regular;
  background-color: ${theme.colors.whiteSmoke};
  border-radius: ${RFValue(4)}px;
  font-size: ${RFValue(14)}px;
  width: ${formWidth}px;
  color: ${theme.colors.black};
  padding-horizontal: ${RFValue(10)}px;
  padding-vertical: ${RFValue(15)}px;
`;

export const FormErrorText = styled.Text`
  font-family: Sora-Regular;
  font-size: ${RFValue(10)}px;
  color: ${theme.colors.coolRed};
`;

export const FormButton = styled.TouchableOpacity`
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  width: ${width}px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.darkViolet};
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
  color: ${theme.colors.white};
  font-size: ${RFValue(16)}px;
`;
