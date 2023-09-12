import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {theme} from '../../utils/theme';

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
  border-color: ${theme.colors.mercury};
  border-radius: ${RFValue(4)}px;
`;

export const FundsTitle = styled.Text`
  font-family: Sora-Bold;
  color: ${theme.colors.black};
  font-size: ${RFValue(18)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const FundPriceText = styled.Text`
  font-family: Sora-Regular;
  color: ${theme.colors.black};
  font-size: ${RFValue(14)}px;
`;

export const FundPriceVariationText = styled.Text`
  font-family: Sora-Regular;
  color: ${props =>
    props.disabled ? theme.colors.aquaGreen : theme.colors.lightCoral};
  font-size: ${RFValue(12)}px;
`;

export const FundTitle = styled.Text`
  font-family: Sora-Bold;
  color: ${theme.colors.black};
  font-size: ${RFValue(12)}px;
  margin-left: ${RFValue(2)}px;
`;
