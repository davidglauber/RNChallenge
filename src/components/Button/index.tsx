/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ColorValue, TouchableOpacity} from 'react-native';
import {TitleButton} from './style';
import {RFValue} from 'react-native-responsive-fontsize';
import {theme} from '../../utils/theme';

interface ButtonInterface {
  title: string;
  width: number;
  height: number;
  color: ColorValue;
  titleColor: ColorValue;
  selfAlign?: boolean;
  hasBorder: boolean;
}
export default function Button({
  height,
  width,
  color,
  title,
  titleColor,
  hasBorder,
  selfAlign,
}: ButtonInterface) {
  return (
    <TouchableOpacity
      style={{
        width,
        height,
        backgroundColor: color,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: selfAlign ? 'center' : 'auto',
        borderWidth: hasBorder ? 1 : 0,
        borderColor: hasBorder ? theme.colors.greyGoose : 'transparent',
        borderRadius: RFValue(4),
      }}>
      <TitleButton style={{color: titleColor}}>{title}</TitleButton>
    </TouchableOpacity>
  );
}
