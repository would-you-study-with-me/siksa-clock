import {
  Button,
  HeaderWithBackButton,
  Icon,
  IconFileNames,
  Slider,
} from 'components';
import colors from 'styles/palette';
import { repeat } from 'utils';
import { S } from './Detail.styles';

export function Detail() {
  return (
    <>
      <HeaderWithBackButton />
      <S.MainImageContainer>
        <Slider indicator>
          <S.MainImage />
          <S.MainImage />
          <S.MainImage />
          <S.MainImage />
        </Slider>
      </S.MainImageContainer>

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
        <S.MenuImageSlideContainer>
          <S.MenuImageSlider>
            <S.SlidePlaceholder />
            <S.SlidePlaceholder />
            <S.SlidePlaceholder />
            <S.SlidePlaceholder />
          </S.MenuImageSlider>
        </S.MenuImageSlideContainer>

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
