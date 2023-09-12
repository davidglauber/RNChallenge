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
import {FundChartImage} from '../Fund/style';

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
            titleFund: 'Info & Stats',
            issueDate: '18/04/2023',
            vintageRange: '2019 - 2023',
            aum: '430.88',
            appreciation: 10.35,
            higherPrice: 15.5,
            lowerPrice: 9.05,
            stockPrice: 144.45,
            ter: 0.15,
            openPrice: 17.74,
            closePrice: 17.68,
            year: 2023,
            chartFull: (
              <FundChartImage
                source={require('../../assets/images/chartFund.png')}
              />
            ),
            chart: (
              <HomeChartImage
                source={require('../../assets/images/chartWind.png')}
              />
            ),
          },
          {
            icon: <FeatherIcons name="sun" size={16} color="#F0A719" />,
            category: 'Solar',
            title: 'Solar Fund',
            titleFund: 'Info & Stats',
            issueDate: '22/06/2023',
            vintageRange: '2018 - 2023',
            aum: '422.88',
            appreciation: 0.35,
            higherPrice: 19.5,
            lowerPrice: 3.05,
            stockPrice: 16.45,
            ter: 0.15,
            openPrice: 17.74,
            closePrice: 17.68,
            year: 2023,
            chartFull: (
              <FundChartImage
                source={require('../../assets/images/chartFund.png')}
              />
            ),
            chart: (
              <HomeChartImage
                source={require('../../assets/images/chartSolar.png')}
              />
            ),
          },
          {
            icon: <FeatherIcons name="feather" size={16} color="#0FDF8F" />,
            category: 'Natural',
            title: 'Natural Fund',
            titleFund: 'Info & Stats',
            issueDate: '18/04/2023',
            vintageRange: '2019 - 2023',
            appreciation: 10.35,
            higherPrice: 15.5,
            lowerPrice: 9.05,
            stockPrice: 14.45,
            ter: 0.15,
            aum: '430.88',
            openPrice: 17.74,
            closePrice: 17.68,
            year: 2023,
            chartFull: (
              <FundChartImage
                source={require('../../assets/images/chartFund.png')}
              />
            ),
            chart: (
              <HomeChartImage
                source={require('../../assets/images/chartWind.png')}
              />
            ),
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
