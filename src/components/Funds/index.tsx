import {useNavigation} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {FlatList} from 'react-native';
import {
  FundInfoView,
  FundPriceText,
  FundPriceVariationView,
  FundTitle,
  FundsBoxButton,
  FundsContainer,
  FundsTitle,
} from './styles';
import {calculateAppreciation} from '../../utils/CalculateAppreciation';

interface FundDetails {
  icon: ReactNode;
  chart: ReactNode;
  title: string;
  price: string;
  profitOrLoss: number;
  category: 'Solar' | 'Wind' | 'Natural';
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
                <FundPriceText>${item.price}</FundPriceText>
                <FundPriceVariationView>
                  {calculateAppreciation(item.profitOrLoss)}
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
