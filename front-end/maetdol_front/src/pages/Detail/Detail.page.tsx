import {
  Button,
  HeaderWithBackButton,
  Icon,
  IconFileNames,
  KakaoMap,
  Loading,
  Slider,
} from 'components';
import { CongestionIconMap } from 'components/ThumbnailCard/ThumbnailCard.model';
import { useParams } from 'react-router-dom';
import colors, { Colors } from 'styles/palette';
import { repeat } from 'utils';
import { useDepsState, useRestaurantDetail } from './Detail.hooks';
import { S } from './Detail.styles';

function DetailContents() {
  const { restaurantId } = useParams();
  const { error, loading, restaurantDetail } = useRestaurantDetail(
    restaurantId ?? '',
  );

  const [mainImages, setMainImages] = useDepsState(
    restaurantDetail?.restaurantMenu.items,
    [restaurantDetail],
    val => val ?? [],
  );
  const removeMainImage = (target: typeof mainImages[number]) => {
    setMainImages(imgs => imgs.filter(img => img.link !== target.link));
  };

  const [menuImages, setMenuImages] = useDepsState(
    restaurantDetail?.restaurantMenu.items,
    [restaurantDetail],
    val => val ?? [],
  );
  const removeMenuImage = (target: typeof menuImages[number]) => {
    setMenuImages(imgs => imgs.filter(img => img.link !== target.link));
  };

  const getRateColor = (starIdx: number): Colors => {
    return starIdx < (restaurantDetail?.restaurantRate ?? 0)
      ? colors.primaryLight
      : colors.gray;
  };

  if (loading) {
    // TODO 애니메이션 유지를 위해 하나의 return 문으로 관리
    return <Loading hide={!loading} />;
  }

  if (error) {
    return <span>상세 페이지를 가져오는 도중 에러가 발생했어요</span>;
  }

  const shouldShowSliderIndicator = mainImages.length > 0;

  const { restaurantX, restaurantY } = restaurantDetail;
  const hasCoordinates = restaurantX !== null && restaurantY !== null;

  return (
    <>
      <S.MainImageContainer>
        <Slider indicator={shouldShowSliderIndicator}>
          {mainImages.map(img => (
            <S.MainImage
              key={img.link}
              src={img.link}
              alt={img.title}
              onError={() => removeMainImage(img)}
            />
          ))}
        </Slider>
      </S.MainImageContainer>

      <S.ContentContainer>
        <S.Category>{restaurantDetail.restaurantCategory}</S.Category>
        <S.Title>{restaurantDetail.restaurantName}</S.Title>

        <S.RatingAndCongestionWrapper>
          <S.RatingWrapper>
            {repeat(5, idx => (
              <Icon
                key={idx}
                type={IconFileNames.STAR}
                size={13}
                colors={{
                  black: getRateColor(idx),
                }}
              />
            ))}
          </S.RatingWrapper>

          <S.CongestionLabel>혼잡도</S.CongestionLabel>
          <Icon
            type={CongestionIconMap[restaurantDetail.restaurantCongestion]}
            size={14}
          />
        </S.RatingAndCongestionWrapper>

        <S.PhoneNumberAndCloseTimeWrapper>
          <S.PhoneNumber>{restaurantDetail.restaurantContact}</S.PhoneNumber>
          <S.OpenCloseTime>
            {restaurantDetail.restaurantOpeningTime}
          </S.OpenCloseTime>
        </S.PhoneNumberAndCloseTimeWrapper>

        <S.Description>{restaurantDetail.restaurantDescription}</S.Description>

        <S.SlideTitle>메뉴</S.SlideTitle>
        <S.MenuImageSlideContainer>
          <S.MenuImageSlider>
            {menuImages.map(img => (
              <S.MenuImage
                key={img.link}
                src={img.link}
                alt={img.title}
                onError={() => removeMenuImage(img)}
              />
            ))}
          </S.MenuImageSlider>
        </S.MenuImageSlideContainer>

        <S.Map>
          {hasCoordinates ? (
            <KakaoMap
              style={{ width: '100%', height: '100%' }}
              x={restaurantX}
              y={restaurantY}
            />
          ) : (
            '위치를 알 수 없어요 :('
          )}
        </S.Map>

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

export function Detail() {
  return (
    <>
      <HeaderWithBackButton />
      <DetailContents />
    </>
  );
}
