import { S } from './Loading.styles';

interface Props {
  hide: boolean;
}

export function Loading({ hide }: Props) {
  return (
    <S.Container hide={hide}>
      <S.Ball />
      <S.Ball />
      <S.Ball />
      <S.Text>로딩 중 이에요..</S.Text>
    </S.Container>
  );
}
