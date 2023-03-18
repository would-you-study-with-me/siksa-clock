import styled from '@emotion/styled';
import { Typography } from 'styles/typography';

export const S = {
  SliderContainer: styled.div`
    position: relative;
    font-size: 0;
  `,

  Indicator: styled.span`
    padding: 4px 7px;
    ${Typography.caption};
    color: ${p => p.theme.colors.white};
    position: absolute;
    right: 16px;
    bottom: 8px;
    border-radius: 4px;
    background-color: ${p => p.theme.colors.fontBlack};
  `,
};
