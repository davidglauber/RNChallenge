import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const HomeContainerHeader = styled.View`
  padding: ${RFValue(20)}px;
  border-bottom-width: 1px;
  border-color: #f4f4f4;
`;
export const HomeTopHeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HomeEarnRewardsHeader = styled.TouchableOpacity`
  position: absolute;
  right: ${RFValue(0)}px;
  width: ${RFValue(110)}px;
  height: ${RFValue(30)}px;
  flex-direction: row;
  background-color: #f7efff;
  border-radius: ${RFValue(4)}px;
  justify-content: center;
  align-items: center;
`;

export const HomeInformationHeaderView = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const HomeBottomHeaderView = styled.View`
  margin-top: ${RFValue(16)}px;
`;

export const HomeProfitHeaderView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${RFValue(3)}px;
  margin-left: ${RFValue(3)}px;
`;

export const HomeUserPicture = styled.View`
  background-color: #f4f4f4;
  justify-content: center;
  align-items: center;
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  border-radius: ${RFValue(50)}px;
`;

export const HomeAccountBudgetText = styled.Text`
  font-family: Sora-Bold;
  font-size: ${RFValue(14)}px;
  color: #000000;
`;

export const HomeMoneyOnAccountText = styled.Text`
  font-family: Sora-Bold;
  font-size: ${RFValue(24)}px;
  color: #000000;
`;

export const HomeEarnRewardsHeaderText = styled.Text`
  font-family: Sora-Bold;
  font-size: ${RFValue(10)}px;
  margin-left: ${RFValue(5)}px;
  color: #770fdf;
`;

export const HomeSubtitleHeader = styled.Text`
  font-family: Sora-Regular;
  font-size: ${RFValue(12)}px;
  color: #000000;
`;

export const HomeProfitOrLossText = styled.Text`
  font-family: Sora-Light;
  font-size: ${RFValue(12)}px;
  color: #0fdf8f;
`;
