import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const RegisterFooterButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: ${RFValue(13)}px;
`;

export const RegisterFooterText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: Sora-Regular;
`;

export const RegisterFooterTextUnderlined = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: Sora-Regular;
  text-decoration: underline;
`;

export const RegisterFooterTextUnderlinedBold = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: Sora-Regular;
  font-weight: bold;
  text-decoration: underline;
`;
