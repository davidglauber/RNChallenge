/* eslint-disable react-native/no-inline-styles */
import FeatherIcons from '@expo/vector-icons/Feather';
import React, {ReactNode, useState} from 'react';
import {FlatList, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Button from '../../components/Button';
import {calculateAppreciation} from '../../utils/CalculateAppreciation';
import {HomeMoneyOnAccountText} from '../Home/style';
import {Container} from '../Login/style';
import {
  FooterFundText,
  FooterFundView,
  FundAppreciationView,
  FundChartImage,
  FundChartPeriodText,
  FundChartPeriodView,
  FundChartPriceText,
  FundChartPriceTextHigh,
  FundChartPriceTextInfo,
  FundChartPriceTextLow,
  FundChartView,
  FundChartWarningText,
  FundHeader,
  FundStatsDetailsView,
  FundStatsInformationView,
  FundStatsTitle,
  FundStatsView,
  FundSummaryButtonsActionView,
  FundSummaryContainer,
  FundSummaryCreditView,
  FundSummaryRowAligned,
  FundSummaryTitleView,
  FundsStatsColumn,
  Row,
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

interface DashboardInterface {
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

interface FundSummaryInterface
  extends Pick<DashboardInterface, 'appreciation'>,
    Pick<StatsInterface, 'title'> {
  credits: number;
  price: string;
  lastPurchase: string;
  warningMessage?: string;
}

function ChartFund({
  higherPrice,
  lowerPrice,
  chart,
}: Omit<DashboardInterface, 'stockPrice' | 'year' | 'appreciation'>) {
  const [activePeriod, setActivePeriod] = useState('day');

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

function DashboardFund({
  stockPrice,
  appreciation,
  higherPrice,
  lowerPrice,
  year,
  chart,
}: DashboardInterface) {
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

function FooterFund() {
  return (
    <FooterFundView>
      <FooterFundText>
        Please note that prices are for reference only and may vary at the time
        of excecuting a buy or sell order.{'\n\n'} The information provided is
        not investment advice, and should not be used as a recommendation to buy
        or sell assets.
      </FooterFundText>
    </FooterFundView>
  );
}

function FundSummary({
  credits,
  price,
  appreciation,
  lastPurchase,
  title,
  warningMessage,
}: FundSummaryInterface) {
  return (
    <FundSummaryContainer>
      <FundSummaryTitleView>
        <FeatherIcons name="briefcase" size={24} color="#000000" />
        <FundStatsTitle style={{marginLeft: RFValue(5)}}>
          {title}
        </FundStatsTitle>
      </FundSummaryTitleView>

      <FundSummaryCreditView>
        <HomeMoneyOnAccountText>{credits} credits</HomeMoneyOnAccountText>
        <HomeMoneyOnAccountText>${price}</HomeMoneyOnAccountText>
      </FundSummaryCreditView>

      <FundSummaryRowAligned>
        <Row>{calculateAppreciation(appreciation)}</Row>
        <FundChartPriceText>Last purchase {lastPurchase}</FundChartPriceText>
      </FundSummaryRowAligned>

      <FundSummaryButtonsActionView>
        <Button
          title="Sell"
          color="#ffffff"
          hasBorder={true}
          width={RFValue(143)}
          height={RFValue(47)}
          titleColor="#770FDF"
        />

        <Button
          title="Retire credits"
          color="#0FDF8F"
          hasBorder={false}
          width={RFValue(143)}
          height={RFValue(47)}
          titleColor="#FFFFFF"
        />
      </FundSummaryButtonsActionView>

      {warningMessage && (
        <FundChartWarningText>{warningMessage}</FundChartWarningText>
      )}

      <FooterFund />

      <Button
        title="Buy"
        color="#770FDF"
        hasBorder={false}
        selfAlign
        width={RFValue(250)}
        height={RFValue(47)}
        titleColor="#ffffff"
      />
    </FundSummaryContainer>
  );
}

export default function Fund() {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <DashboardFund
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

      <FundSummary
        title="Your Portfolio"
        credits={18}
        lastPurchase="28d ago"
        price="328.14"
        warningMessage="You’ve previously retired 28 credits of this asset"
        appreciation={8.41}
      />
    </Container>
  );
}
