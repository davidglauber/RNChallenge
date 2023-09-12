import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {width} from '../../utils/Dimensions';
import {theme} from '../../utils/theme';

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
  color: ${theme.colors.starDust};
`;

export const FundChartPriceText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: Sora-Regular;
  color: ${theme.colors.starDust};
`;

export const FundChartPriceTextInfo = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: Sora-Regular;
  color: ${theme.colors.black};
`;

export const FundChartWarningText = styled.Text`
  font-size: ${RFValue(10)}px;
  margin-top: ${RFValue(15)}px;
  font-family: Sora-Light;
  color: ${theme.colors.starDust};
`;

export const FooterFundText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: Sora-Light;
  color: ${theme.colors.starDust};
`;

export const FundChartPriceTextLow = styled.Text`
  position: absolute;
  left: ${RFValue(25)}px;
  top: ${RFValue(155)}px;
  font-size: ${RFValue(14)}px;
  font-family: Sora-Regular;
  color: ${theme.colors.starDust};
`;

export const FundChartPeriodView = styled.TouchableOpacity`
  background-color: ${theme.colors.titanWhite};
  margin-top: ${RFValue(38)}px;
  border-radius: ${RFValue(4)}px;
  margin-horizontal: ${RFValue(15)}px;
  width: ${RFValue(35)}px;
  justify-content: center;
  align-items: center;
  height: ${RFValue(35)}px;
`;

export const FundChartPeriodText = styled.Text`
  color: ${theme.colors.darkViolet};
  font-family: Sora-Regular;
  font-size: ${RFValue(15)}px;
`;

export const FundStatsView = styled.View`
  margin-horizontal: ${RFValue(20)}px;
`;

export const FooterFundView = styled.View`
  background-color: ${theme.colors.whiteSmoke};
  width: ${RFValue(300)}px;
  margin-vertical: ${RFValue(40)}px;
  border-radius: ${RFValue(4)}px;
  padding: ${RFValue(10)}px;
`;

export const FundStatsTitle = styled.Text`
  font-family: Sora-Bold;
  font-size: ${RFValue(17)}px;
  margin-bottom: ${RFValue(18)}px;
  color: ${theme.colors.black};
`;

export const FundBreakdownView = styled.View`
  margin: ${RFValue(20)}px;
`;

export const FundsBreakdownNewsView = styled.View`
  width: ${RFValue(200)}px;
  background-color: ${theme.colors.white};
  padding: ${RFValue(10)}px;
  margin-right: ${RFValue(10)}px;
  border-width: ${RFValue(1)}px;
  border-color: ${theme.colors.whiteSmoke};
  border-radius: ${RFValue(4)}px;
`;

export const FundBreakdownShortDescription = styled.Text`
  font-family: Sora-Regular;
  font-size: ${RFValue(12)}px;
  color: ${theme.colors.black};
`;

export const FundStatsDetailsView = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(20)}px;
`;

export const FundBreakdownLogo = styled.Image`
  height: ${RFValue(20)}px;
  align-self: center;
  margin-vertical: ${RFValue(11)}px;
`;

export const FundBreakdownNewsImage = styled.Image`
  width: ${RFValue(200)}px;
  height: ${RFValue(100)}px;
  margin-top: ${RFValue(-12)}px;
  align-self: center;
`;

export const FundSummaryCreditView = styled.View`
  margin-top: ${RFValue(19)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const FundSummaryRowAligned = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FundSummaryButtonsActionView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${RFValue(20)}px;
`;

export const FundsStatsColumn = styled.View`
  flex-direction: column;
  margin-right: ${RFValue(50)}px;
`;
export const FundStatsInformationView = styled.View`
  margin-bottom: ${RFValue(10)}px;
`;
export const FundSummaryContainer = styled.View`
  margin: ${RFValue(20)}px;
  margin-top: ${RFValue(50)}px;
`;

export const FundSummaryTitleView = styled.View`
  flex-direction: row;
  align-items: center;
`;
