import FeatherIcons from '@expo/vector-icons/Feather';
import React from 'react';
import {FundPriceVariationText} from '../components/Funds/styles';
import {theme} from './theme';

function checkProfit(item: number): boolean {
  if (item > 1) {
    return true;
  } else {
    return false;
  }
}

export function calculateAppreciation(value: number, valueInCurrency?: string) {
  return (
    <>
      <FeatherIcons
        name={checkProfit(value) ? 'arrow-up-right' : 'arrow-down-right'}
        size={12}
        color={
          checkProfit(value) ? theme.colors.aquaGreen : theme.colors.lightCoral
        }
      />
      <FundPriceVariationText disabled={checkProfit(value) ? true : false}>
        {value}% {valueInCurrency && `($${valueInCurrency})`}
      </FundPriceVariationText>
    </>
  );
}
