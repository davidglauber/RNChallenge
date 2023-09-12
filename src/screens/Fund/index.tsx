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
  FundChartPriceTextHigh,
  FundChartPriceTextLow,
  FundChartView,
  FundHeader,
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
    </Container>
  );
}
