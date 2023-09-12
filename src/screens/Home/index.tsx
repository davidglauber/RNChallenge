import FeatherIcons from '@expo/vector-icons/Feather';
import React, {ReactNode} from 'react';
import {ColorValue} from 'react-native';

import Funds from '../../components/Funds';
import {Container} from '../Login/style';
import {
  BannerColumnView,
  BannerContainer,
  BannerDescription,
  BannerTitle,
  HomeAccountBudgetText,
  HomeBannerImage,
  HomeBottomHeaderView,
  HomeChartImage,
  HomeContainerHeader,
  HomeEarnRewardsHeader,
  HomeEarnRewardsHeaderText,
  HomeInformationCardList,
  HomeInformationHeaderView,
  HomeMoneyOnAccountText,
  HomeProfitHeaderView,
  HomeProfitOrLossText,
  HomeSubtitleHeader,
  HomeTopHeaderView,
  HomeUserPicture,
  InformationCardContainer,
  InformationCardTitle,
} from './style';

const mockedArrayInformationCard = [
  {
    id: 0,
    title: 'Why should you invest here?',
  },
  {
    id: 1,
    title: 'When we need to buy cryptos?',
  },
  {
    id: 2,
    title: 'How much do we need to rest?',
  },
];
interface HeaderInterface {
  balance: string;
  profitOrLosses: number;
  portfolioValue: string;
}

interface BannerInterface {
  title: string;
  description: string;
  image: ReactNode | string;
  colorBackground: ColorValue;
}
interface InformationCardInterface {
  title: string;
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

function Banner({title, description, image, colorBackground}: BannerInterface) {
  return (
    <BannerContainer style={{backgroundColor: colorBackground}}>
      <BannerColumnView>
        <BannerTitle>{title}</BannerTitle>
        <BannerDescription>{description}</BannerDescription>
      </BannerColumnView>
      {image}
    </BannerContainer>
  );
}

function InformationCard({title}: InformationCardInterface) {
  return (
    <InformationCardContainer>
      <InformationCardTitle>{title}</InformationCardTitle>
    </InformationCardContainer>
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

      <Funds
        title="Funds"
        funds={[
          {
            icon: <FeatherIcons name="wind" size={16} color="#4A88D0" />,
            category: 'Wind',
            title: 'Wind Fund',
            chart: (
              <HomeChartImage
                source={require('../../assets/images/chartWind.png')}
              />
            ),
            price: '1032.23',
            profitOrLoss: 3.51,
          },
          {
            icon: <FeatherIcons name="sun" size={16} color="#F0A719" />,
            category: 'Solar',
            title: 'Solar Fund',
            chart: (
              <HomeChartImage
                source={require('../../assets/images/chartSolar.png')}
              />
            ),
            price: '986.61',
            profitOrLoss: 0.13,
          },
          {
            icon: <FeatherIcons name="feather" size={16} color="#0FDF8F" />,
            category: 'Natural',
            title: 'Natural Fund',
            chart: (
              <HomeChartImage
                source={require('../../assets/images/chartWind.png')}
              />
            ),
            price: '1122.95',
            profitOrLoss: 2.15,
          },
        ]}
      />

      <Banner
        title="Learn more about carbon credits"
        description="Check out our top tips!"
        image={
          <HomeBannerImage
            source={require('../../assets/images/bannerImage.png')}
          />
        }
        colorBackground="#770FDF"
      />

      <HomeInformationCardList
        data={mockedArrayInformationCard}
        numColumns={2}
        renderItem={({item}: any) => <InformationCard title={item.title} />}
      />
    </Container>
  );
}
