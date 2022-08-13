import StarIcon from '../../assets/icons/StarIcon';

interface Props extends React.PropsWithChildren {
  rate: number;
}

const StarRate = ({ rate }: Props) => {
  const makeStarIcon = new Array(5)
    .fill(<StarIcon />)
    .map((item, index) => (
      <StarIcon
        key={`starIcon-${index + 100}`}
        color={rate - (index + 1) >= 0 ? 'primary' : 'disabled'}
      />
    ));
  return <div>{makeStarIcon}</div>;
};

export default StarRate;
