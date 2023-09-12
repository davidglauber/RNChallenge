/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode, useState} from 'react';
import {FlatList, View} from 'react-native';
import {calculateAppreciation} from '../../utils/CalculateAppreciation';
import {HomeMoneyOnAccountText} from '../Home/style';
import {Container} from '../Login/style';
import {
  FundAppreciationView,
  FundChartImage,
  FundChartPeriodText,
  FundChartPeriodView,
  FundChartPriceText,
  FundChartPriceTextHigh,
  FundChartPriceTextInfo,
  FundChartPriceTextLow,
  FundChartView,
  FundHeader,
  FundStatsDetailsView,
  FundStatsInformationView,
  FundStatsTitle,
  FundStatsView,
  FundsStatsColumn,
} from './style';

const chartPeriod = [
  {
    type: 'hour',
    title: '1h',
  },
  {
    type: 'day',
    title: '1d',
  },
  {
    type: 'week',
    title: '1w',
  },
  {
    type: 'month',
    title: '1m',
  },
  {
    type: 'year',
    title: '1y',
  },
  {
    type: 'all',
    title: 'All',
  },
];

interface SummaryInterface {
  stockPrice: number;
  year: number;
  appreciation: number;
  lowerPrice: number;
  higherPrice: number;
  chart: ReactNode;
}

interface StatsInterface {
  title: string;
  aum: string;
  vintageRange: string;
  closePrice: number;
  openPrice: number;
  ter: number;
  issueDate: string;
}

function ChartFund({
  higherPrice,
  lowerPrice,
  chart,
}: Omit<SummaryInterface, 'stockPrice' | 'year' | 'appreciation'>) {
  const [activePeriod, setActivePeriod] = useState('1d');

  const handlePeriodClick = (type: string) => {
    setActivePeriod(type);
  };

  return (
    <FundChartView>
      <FundChartPriceTextHigh>${higherPrice}</FundChartPriceTextHigh>
      {chart}
      <FundChartPriceTextLow>${lowerPrice}</FundChartPriceTextLow>

      <FlatList
        data={chartPeriod}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <FundChartPeriodView
            style={{
              backgroundColor:
                activePeriod === item.type ? '#f7efff' : '#ffffff',
            }}
            onPress={() => handlePeriodClick(item.type)}>
            <FundChartPeriodText
              style={{
                color: activePeriod === item.type ? '#770fdf' : '#A0A0A0',
              }}>
              {item.title}
            </FundChartPeriodText>
          </FundChartPeriodView>
        )}
      />
    </FundChartView>
  );
}

function SummaryFund({
  stockPrice,
  appreciation,
  higherPrice,
  lowerPrice,
  year,
  chart,
}: SummaryInterface) {
  return (
    <View>
      <FundHeader>
        <HomeMoneyOnAccountText>${stockPrice}</HomeMoneyOnAccountText>
        <HomeMoneyOnAccountText>{year}</HomeMoneyOnAccountText>
      </FundHeader>
      <FundAppreciationView>
        {calculateAppreciation(appreciation, '1.21')}
      </FundAppreciationView>

      <ChartFund
        higherPrice={higherPrice}
        lowerPrice={lowerPrice}
        chart={chart}
      />
    </View>
  );
}

function StatsFund({
  title,
  aum,
  closePrice,
  issueDate,
  openPrice,
  ter,
  vintageRange,
}: StatsInterface) {
  return (
    <FundStatsView>
      <FundStatsTitle>{title}</FundStatsTitle>

      <FundStatsDetailsView>
        <FundsStatsColumn>
          <FundStatsInformationView>
            <FundChartPriceText>AUM ⓘ</FundChartPriceText>
            <FundChartPriceTextInfo>${aum}m</FundChartPriceTextInfo>
          </FundStatsInformationView>

          <FundStatsInformationView>
            <FundChartPriceText>Vintage Range ⓘ</FundChartPriceText>
            <FundChartPriceTextInfo>{vintageRange}</FundChartPriceTextInfo>
          </FundStatsInformationView>

          <FundStatsInformationView>
            <FundChartPriceText>Price at Close ⓘ</FundChartPriceText>
            <FundChartPriceTextInfo>{closePrice}%</FundChartPriceTextInfo>
          </FundStatsInformationView>
        </FundsStatsColumn>

        <FundsStatsColumn>
          <FundStatsInformationView>
            <FundChartPriceText>Issue Date ⓘ</FundChartPriceText>
            <FundChartPriceTextInfo>{issueDate}</FundChartPriceTextInfo>
          </FundStatsInformationView>

          <FundStatsInformationView>
            <FundChartPriceText>TER ⓘ</FundChartPriceText>
            <FundChartPriceTextInfo>{ter}%</FundChartPriceTextInfo>
          </FundStatsInformationView>

          <FundStatsInformationView>
            <FundChartPriceText>Price at Open ⓘ</FundChartPriceText>
            <FundChartPriceTextInfo>{openPrice}%</FundChartPriceTextInfo>
          </FundStatsInformationView>
        </FundsStatsColumn>
      </FundStatsDetailsView>
    </FundStatsView>
  );
}

export default function Fund() {
  return (
    <Container>
      <SummaryFund
        appreciation={10.35}
        higherPrice={15.5}
        lowerPrice={9.05}
        stockPrice={14.45}
        chart={
          <FundChartImage
            source={require('../../assets/images/chartFund.png')}
          />
        }
        year={2023}
      />

      <StatsFund
        title="Info & Stats"
        issueDate="18/04/2023"
        ter={0.15}
        vintageRange="2019 - 2023"
        openPrice={17.74}
        closePrice={17.68}
        aum="430.88"
      />
    </Container>
  );
}
