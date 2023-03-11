import styled from '@emotion/styled';
import { Typography } from 'styles/typography';

const SliderContainer = styled.div`
  background-color: ${p => p.theme.colors.white};
  padding-top: 68.2%;
  position: relative;
`;

const SliderWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  padding: 25px 16px;
`;

const Category = styled.span`
  ${Typography.caption};
  ${p => p.theme.typography.caption};
  color: ${p => p.theme.colors.fontBlack};
`;

const Title = styled.h1`
  margin: 16px 0 12px;
  ${Typography.title1};
  color: ${p => p.theme.colors.fontBlack};
`;

const RatingWrapper = styled.span`
  display: inline-block;
  margin-right: 16px;
  line-height: 0;
`;

const CongestionLabel = styled.span`
  ${Typography.body1};
  color: ${p => p.theme.colors.fontBlack};
`;

const VerticalCenter = styled.div`
  display: flex;
  align-items: center;
`;

const RatingAndCongestionWrapper = styled(VerticalCenter)`
  margin-bottom: 12px;
`;

const PhoneNumber = styled.span`
  ${Typography.body2};
  color: ${p => p.theme.colors.fontBlack};
  display: inline-block;
`;

const OpenCloseTime = styled.span`
  color: ${p => p.theme.colors.fontBlack};
  ${Typography.body1};
  margin-left: auto;
`;

const PhoneNumberAndCloseTimeWrapper = styled(VerticalCenter)`
  margin-bottom: 20px;
`;

const Description = styled.p`
  ${Typography.body2};
  margin-bottom: 45px;
`;

const SlideTitle = styled.h2`
  ${Typography.head1};
  color: ${p => p.theme.colors.fontBlack};
  margin-bottom: 16px;
`;

const SlidePlaceholderWrapper = styled.div`
  width: max-content;
`;

const SlidePlaceholder = styled.div`
  width: 110px;
  height: 110px;
  background-color: ${p => p.theme.colors.gray};
  display: inline-block;

  & + & {
    margin-left: 24px;
  }
`;

const SlideScrollWrapper = styled.div`
  overflow-x: auto;
  margin-bottom: 40px;
`;

const Map = styled.div`
  height: 208px;
  background-color: ${p => p.theme.colors.white};
  margin-bottom: 21px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 16px 25px;
  background: white;
  bottom: 0;
  position: sticky;
  margin: 0 -16px -25px;
`;

const Indicator = styled.span`
  padding: 4px 7px;
  ${Typography.caption};
  color: ${p => p.theme.colors.white};
  position: absolute;
  right: 16px;
  bottom: 8px;
  border-radius: 4px;
  background-color: ${p => p.theme.colors.fontBlack};
`;

export const S = {
  SliderContainer,
  SliderWrapper,
  Category,
  ContentContainer,
  Title,
  RatingWrapper,
  CongestionLabel,
  RatingAndCongestionWrapper,
  PhoneNumber,
  OpenCloseTime,
  VerticalCenter,
  PhoneNumberAndCloseTimeWrapper,
  Description,
  SlideTitle,
  SlidePlaceholderWrapper,
  SlidePlaceholder,
  SlideScrollWrapper,
  Map,
  ButtonContainer,
  Indicator,
};
