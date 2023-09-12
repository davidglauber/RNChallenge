import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {width} from '../../utils/Dimensions';

export const FundHeader = styled.View`
  padding: ${RFValue(20)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const FundAppreciationView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: ${RFValue(20)}px;
  margin-top: ${RFValue(-15)}px;
`;

export const FundChartImage = styled.Image`
  width: ${width}px;
  height: ${RFValue(153)}px;
`;

export const FundChartView = styled.View`
  margin-vertical: ${RFValue(40)}px;
`;

export const FundChartPriceTextHigh = styled.Text`
  position: absolute;
  right: ${RFValue(100)}px;
  top: ${RFValue(-25)}px;
  font-size: ${RFValue(14)}px;
  font-family: Sora-Regular;
  color: #a0a0a0;
`;

export const FundChartPriceText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: Sora-Regular;
  color: #a0a0a0;
`;

export const FundChartPriceTextInfo = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: Sora-Regular;
  color: #000000;
`;

export const FundChartPriceTextLow = styled.Text`
  position: absolute;
  left: ${RFValue(25)}px;
  top: ${RFValue(155)}px;
  font-size: ${RFValue(14)}px;
  font-family: Sora-Regular;
  color: #a0a0a0;
`;

export const FundChartPeriodView = styled.TouchableOpacity`
  background-color: #f7efff;
  margin-top: ${RFValue(38)}px;
  border-radius: ${RFValue(4)}px;
  margin-horizontal: ${RFValue(15)}px;
  width: ${RFValue(35)}px;
  justify-content: center;
  align-items: center;
  height: ${RFValue(35)}px;
`;

export const FundChartPeriodText = styled.Text`
  color: #770fdf;
  font-family: Sora-Regular;
  font-size: ${RFValue(15)}px;
`;

export const FundStatsView = styled.View`
  margin-horizontal: ${RFValue(20)}px;
`;

export const FundStatsTitle = styled.Text`
  font-family: Sora-Bold;
  font-size: ${RFValue(17)}px;
  color: #000000;
`;

export const FundStatsDetailsView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: ${RFValue(350)}px;
  margin-top: ${RFValue(20)}px;
`;

export const FundsStatsColumn = styled.View`
  flex-direction: column;
  margin-right: ${RFValue(50)}px;
`;
export const FundStatsInformationView = styled.View`
  margin-bottom: ${RFValue(10)}px;
`;
