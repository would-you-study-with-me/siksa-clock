import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { RestaurantListInfo } from '../../../models/restaurant.model';
import CardItem from '../../../components/card/CardItem';

const mock: RestaurantListInfo[] = [
  {
    id: 'uuid',
    name: '식당이름',
    rate: 4,
    congestion: 'normal',
    distance: 1111,
    category: '양식',
  },
  {
    id: 'uuid1',
    name: '식당이름',
    rate: 5,
    congestion: 'crowded',
    distance: 1111,
    category: '양식',
  },
  {
    id: 'uuid2',
    name: '식당이름',
    rate: 2,
    congestion: 'smooth',
    distance: 1111,
    category: '양식',
  },
  {
    id: 'uuid3',
    name: '식당이름',
    rate: 3,
    congestion: 'smooth',
    distance: 1111,
    category: '양식',
  },
  {
    id: 'uuid000',
    name: '식당이름',
    rate: 0,
    congestion: 'smooth',
    distance: 1111,
    category: '양식',
  },
];

const Title = styled(Typography)`
  padding: 40px 0 16px;
`;

const Container = styled.div`
  padding: 0 16px;
`;

const CardItemContainer = styled.div`
  padding-bottom: 24px;
  &:last-of-type {
    padding-bottom: 0;
  }
`;
const CardList = () => {
  const cards = mock.map(data => (
    <CardItemContainer key={`${data.id}-임시키`}>
      <CardItem
        rate={data.rate}
        congestion={data.congestion}
        title={data.name}
        distance={data.distance}
        category={data.category}
      />
    </CardItemContainer>
  ));
  return (
    <Container>
      <Title variant="h2">내 주변 식사</Title>
      {cards}
    </Container>
  );
};

export default CardList;
