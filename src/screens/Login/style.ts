import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {theme} from '../../utils/theme';

export const LoginFooterButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: ${RFValue(13)}px;
`;

export const LoginFooterText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: Sora-Regular;
`;

export const LoginFooterTextUnderlined = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: Sora-Regular;
  text-decoration: underline;
`;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.white};
`;
