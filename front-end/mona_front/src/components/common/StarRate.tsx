import StarIcon from '../../assets/icons/StarIcon';

type Size = 'inherit' | 'large' | 'medium' | 'small';
interface Props extends React.PropsWithChildren {
  rate: number;
  size?: Size;
}

const StarRate = ({ rate, ...props }: Props) => {
  const { size = 'small' } = props;
  const makeStarIcon = new Array(5)
    .fill(<StarIcon />)
    .map((item, index) => (
      <StarIcon
        key={`starIcon-${index + 100}`}
        color={rate > index ? 'primary' : 'disabled'}
        fontSize={size}
      />
    ));
  return <div>{makeStarIcon}</div>;
};

export default StarRate;
