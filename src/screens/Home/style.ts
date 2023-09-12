import {FlatList} from 'react-native';
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

export const HomeChartImage = styled.Image`
  margin-vertical: ${RFValue(14)}px;
  max-width: ${RFValue(80)}px;
  max-height: ${RFValue(40)}px;
`;

export const HomeBannerImage = styled.Image`
  max-width: ${RFValue(80)}px;
  max-height: ${RFValue(80)}px;
  margin-left: ${RFValue(30)}px;
`;

export const HomeBottomHeaderView = styled.View`
  margin-top: ${RFValue(16)}px;
`;

export const HomeInformationCardList = styled(FlatList)`
  margin-horizontal: ${RFValue(20)}px;
`;

export const BannerContainer = styled.TouchableOpacity`
  flex-direction: row;
  width: ${RFValue(295)}px;
  margin: ${RFValue(20)}px;
  padding: ${RFValue(20)}px;
  border-radius: ${RFValue(10)}px;
`;

export const BannerColumnView = styled.View`
  flex-direction: column;
`;

export const BannerTitle = styled.Text`
  font-family: Sora-Bold;
  font-size: ${RFValue(16)}px;
  max-width: ${RFValue(150)}px;
  color: #ffffff;
`;

export const BannerDescription = styled.Text`
  font-family: Sora-Light;
  font-size: ${RFValue(12)}px;
  margin-top: ${RFValue(10)}px;
  max-width: ${RFValue(150)}px;
  color: #ffffff;
`;

export const HomeProfitHeaderView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${RFValue(3)}px;
  margin-left: ${RFValue(3)}px;
`;

export const InformationCardContainer = styled.TouchableOpacity`
  padding-vertical: ${RFValue(21)}px;
  padding-horizontal: ${RFValue(12)}px;
  margin-bottom: ${RFValue(20)}px;
  margin-right: ${RFValue(20)}px;
  border-radius: ${RFValue(10)}px;
  width: ${RFValue(139)}px;
  height: ${RFValue(215)}px;
  background-color: #f4f4f4;
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

export const InformationCardTitle = styled.Text`
  font-family: Sora-Bold;
  font-size: ${RFValue(12)}px;
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
