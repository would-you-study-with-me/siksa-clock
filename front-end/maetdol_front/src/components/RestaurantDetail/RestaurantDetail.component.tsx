import { Button, HeaderWithBackButton, Icon, IconFileNames } from 'components';
import colors from 'styles/palette';
import { repeat } from 'utils';
import { S } from './RestaurantDetail.styles';

export function RestaurantDetail() {
  return (
    <>
      <HeaderWithBackButton />
      <S.SliderContainer>
        <S.SliderWrapper />
        <S.Indicator>2 / 2</S.Indicator>
      </S.SliderContainer>

      <S.ContentContainer>
        <S.Category>카테고리</S.Category>
        <S.Title>타이틀</S.Title>

        <S.RatingAndCongestionWrapper>
          <S.RatingWrapper>
            {repeat(5, idx => (
              <Icon
                key={idx}
                type={IconFileNames.STAR}
                size={13}
                colors={{
                  black: idx < 3 ? colors.primaryLight : colors.gray,
                }}
              />
            ))}
          </S.RatingWrapper>

          <S.CongestionLabel>혼잡도</S.CongestionLabel>
          <Icon type={IconFileNames.FACE_GOOD} size={14} />
        </S.RatingAndCongestionWrapper>

        <S.PhoneNumberAndCloseTimeWrapper>
          <S.PhoneNumber>010-0000-0000</S.PhoneNumber>
          <S.OpenCloseTime>PM 5:00 ~ AM 12:00</S.OpenCloseTime>
        </S.PhoneNumberAndCloseTimeWrapper>

        <S.Description>Description here</S.Description>

        <S.SlideTitle>메뉴</S.SlideTitle>
        <S.SlideScrollWrapper>
          <S.SlidePlaceholderWrapper>
            <S.SlidePlaceholder />
            <S.SlidePlaceholder />
            <S.SlidePlaceholder />
            <S.SlidePlaceholder />
          </S.SlidePlaceholderWrapper>
        </S.SlideScrollWrapper>

        <S.Map />

        <S.ButtonContainer>
          <Button outline fullWidth textColor={colors.primaryLight}>
            전화보기
          </Button>
          <Button outline fullWidth textColor={colors.primaryLight}>
            위치보기
          </Button>
        </S.ButtonContainer>
      </S.ContentContainer>
    </>
  );
}
