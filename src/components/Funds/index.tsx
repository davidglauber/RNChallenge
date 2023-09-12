import {useNavigation} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {FlatList} from 'react-native';
import {calculateAppreciation} from '../../utils/CalculateAppreciation';
import {
  FundInfoView,
  FundPriceText,
  FundPriceVariationView,
  FundTitle,
  FundsBoxButton,
  FundsContainer,
  FundsTitle,
} from './styles';

interface FundDetails {
  icon: ReactNode;
  chart: ReactNode;
  title: string;
  category: 'Solar' | 'Wind' | 'Natural';
  stockPrice: number;
  year: number;
  appreciation: number;
  lowerPrice: number;
  higherPrice: number;
  chartFull: ReactNode;
  titleFund: string;
  aum: string;
  vintageRange: string;
  closePrice: number;
  openPrice: number;
  ter: number;
  issueDate: string;
}
interface FundsInterface {
  title: string;
  funds: FundDetails[];
}

export default function Funds({title, funds}: FundsInterface) {
  const {navigate}: any = useNavigation();

  return (
    <FundsContainer>
      <FundsTitle>{title}</FundsTitle>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <FundsBoxButton onPress={() => navigate('Fund', {fund: item})}>
              {item.icon}
              <FundTitle>{item.title}</FundTitle>
              {item.chart}

              <FundInfoView>
                <FundPriceText>${item.stockPrice}</FundPriceText>
                <FundPriceVariationView>
                  {calculateAppreciation(item.appreciation)}
                </FundPriceVariationView>
              </FundInfoView>
            </FundsBoxButton>
          );
        }}
        data={funds}
      />
    </FundsContainer>
  );
}
