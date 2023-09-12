import FeatherIcons from '@expo/vector-icons/Feather';
import React from 'react';
import {FundPriceVariationText} from '../components/Funds/styles';

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
        color={checkProfit(value) ? '#0FDF8F' : '#EE8688'}
      />
      <FundPriceVariationText disabled={checkProfit(value) ? true : false}>
        {value}% {valueInCurrency && `($${valueInCurrency})`}
      </FundPriceVariationText>
    </>
  );
}
