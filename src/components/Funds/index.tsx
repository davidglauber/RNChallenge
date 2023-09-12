import FeatherIcons from '@expo/vector-icons/Feather';
import React, {ReactNode} from 'react';
import {FlatList} from 'react-native';
import {
  FundInfoView,
  FundPriceText,
  FundPriceVariationText,
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
  price: string;
  profitOrLoss: number;
  category: 'Solar' | 'Wind' | 'Natural';
}
interface FundsInterface {
  title: string;
  funds: FundDetails[];
}
export default function Funds({title, funds}: FundsInterface) {
  function checkProfit(item: number): boolean {
    if (item > 1) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <FundsContainer>
      <FundsTitle>{title}</FundsTitle>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <FundsBoxButton onPress={() => {}}>
              {item.icon}

              <FundTitle>{item.title}</FundTitle>

              {item.chart}

              <FundInfoView>
                <FundPriceText>${item.price}</FundPriceText>
                <FundPriceVariationView>
                  <FeatherIcons
                    name={
                      checkProfit(item.profitOrLoss)
                        ? 'arrow-up-right'
                        : 'arrow-down-right'
                    }
                    size={12}
                    color={
                      checkProfit(item.profitOrLoss) ? '#0FDF8F' : '#EE8688'
                    }
                  />
                  <FundPriceVariationText
                    disabled={checkProfit(item.profitOrLoss) ? true : false}>
                    {item.profitOrLoss}%
                  </FundPriceVariationText>
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
