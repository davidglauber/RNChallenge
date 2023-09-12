import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const FundsContainer = styled.View`
  padding: ${RFValue(20)}px;
`;

export const FundInfoView = styled.View`
  flex-direction: row;
`;

export const FundPriceVariationView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: ${RFValue(5)}px;
`;

export const FundsBoxButton = styled.TouchableOpacity`
  width: ${RFValue(140)}px;
  height: ${RFValue(145)}px;
  padding: ${RFValue(10)}px;
  margin-right: ${RFValue(15)}px;
  border-width: ${RFValue(1)}px;
  border-color: #e6e6e6;
  border-radius: ${RFValue(4)}px;
`;

export const FundsTitle = styled.Text`
  font-family: Sora-Bold;
  color: #000000;
  font-size: ${RFValue(18)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const FundPriceText = styled.Text`
  font-family: Sora-Regular;
  color: #000000;
  font-size: ${RFValue(14)}px;
`;

export const FundPriceVariationText = styled.Text`
  font-family: Sora-Regular;
  color: ${props => (props.disabled ? '#0FDF8F' : '#EE8688')};
  font-size: ${RFValue(12)}px;
`;

export const FundTitle = styled.Text`
  font-family: Sora-Bold;
  color: #000000;
  font-size: ${RFValue(12)}px;
  margin-left: ${RFValue(2)}px;
`;
