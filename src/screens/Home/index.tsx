import FeatherIcons from '@expo/vector-icons/Feather';
import React from 'react';

import {Container} from '../Login/style';
import {
  HomeAccountBudgetText,
  HomeBottomHeaderView,
  HomeContainerHeader,
  HomeEarnRewardsHeader,
  HomeEarnRewardsHeaderText,
  HomeInformationHeaderView,
  HomeMoneyOnAccountText,
  HomeProfitHeaderView,
  HomeProfitOrLossText,
  HomeSubtitleHeader,
  HomeTopHeaderView,
  HomeUserPicture,
} from './style';

interface HeaderInterface {
  balance: string;
  profitOrLosses: number;
  portfolioValue: string;
}

function HomeHeader({
  balance,
  profitOrLosses,
  portfolioValue,
}: HeaderInterface) {
  return (
    <HomeContainerHeader>
      <HomeTopHeaderView>
        <HomeUserPicture>
          <FeatherIcons name="user" size={20} color="#000000" />
        </HomeUserPicture>
        <HomeAccountBudgetText>Account: ${balance} ▾</HomeAccountBudgetText>
        <FeatherIcons name="bell" size={20} color="#000000" />
      </HomeTopHeaderView>

      <HomeBottomHeaderView>
        <HomeSubtitleHeader>Portfolio</HomeSubtitleHeader>
        <HomeInformationHeaderView>
          <HomeMoneyOnAccountText>${portfolioValue}</HomeMoneyOnAccountText>

          <HomeProfitHeaderView>
            <FeatherIcons name="arrow-up-right" size={12} color="#0FDF8F" />
            <HomeProfitOrLossText>{profitOrLosses}%</HomeProfitOrLossText>
          </HomeProfitHeaderView>

          <HomeEarnRewardsHeader>
            <FeatherIcons name="database" size={12} color="#770FDF" />
            <HomeEarnRewardsHeaderText>Earn Rewards</HomeEarnRewardsHeaderText>
          </HomeEarnRewardsHeader>
        </HomeInformationHeaderView>
      </HomeBottomHeaderView>
    </HomeContainerHeader>
  );
}
export default function Home() {
  return (
    <Container>
      <HomeHeader
        balance="1,457.23"
        portfolioValue="1,245.23"
        profitOrLosses={31.82}
      />
    </Container>
  );
}
